const { functions, admin, auth, db, rtdb, cloudRegion } = require("./bootstrap")
const utils = require("./utils")

exports.listTables = functions.region(cloudRegion).https.onCall(async (data, context) => {  
  const result = []
  const tables = await db.collection("tables").get()
  tables.forEach(doc => {
    result.push(doc.data())
  })
  return utils.createSuccess(result)
});

exports.addTable = functions.region(cloudRegion).https.onCall(async (data, context) => {  
  try{
    await db.collection("tables").doc(data.name).set(data) 
    return utils.createSuccess(data)
  } catch (err) {
    return utils.createReject(err.message)
  }
});

exports.reserveTable = functions.region(cloudRegion).https.onCall(async (data, context) => {
  try{
    await db.collection("tables").doc(data.name).update({status: "reserved"})
    return utils.createSuccess(data)    
  }catch(err){
    return utils.createReject(err.message)
  }
});

exports.listQueues = functions.region(cloudRegion).https.onCall(async (data, context) => {
  const result = []
  const queues = await db.collection("queues").orderBy("createdAt").get()
  queues.forEach(doc => {
    result.push({ id: doc.id, ...doc.data() })
  })
  return utils.createSuccess(result)
});

exports.enqueue = functions.region(cloudRegion).https.onCall(async (data, context) => {
  try {
    const queueData = {
      name: data.name,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      status: "waiting"
    }
    const docRef = await db.collection("queues").add(queueData)
    return utils.createSuccess({ id: docRef.id, ...queueData })
  } catch (err) {
    return utils.createReject(err.message)
  }
});

exports.dequeue = functions.region(cloudRegion).https.onCall(async (data, context) => {
  try {
    const snapshot = await db.collection("queues")
      .where("status", "==", "waiting")
      .orderBy("createdAt")
      .limit(1)
      .get()

    if (snapshot.empty) {
      return utils.createReject("No queue found")
    }

    const doc = snapshot.docs[0]
    await doc.ref.update({ status: "called" })
    return utils.createSuccess({ id: doc.id, ...doc.data(), status: "called" })
  } catch (err) {
    return utils.createReject(err.message)
  }
});


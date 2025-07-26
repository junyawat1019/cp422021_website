import { defineStore } from "pinia";

export const useTableStore = defineStore({
  id: "table",
  state: () => {
    return {
      tables : [
        {
          name : "โต๊ะที่ 1",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 2",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 3",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 4",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 5",
          checkin : "13.42",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 6",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 7",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 8",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 9",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        },
        {
          name : "โต๊ะที่ 10",
          checkin : "",
          checkout : "",
          total : 0,
          status : "ready",
          foods : []
        }
      ]
    }
  },
  getters: {
    totalTables: (state) => state.tables.length,
    readyTables: (state) => state.tables.filter((table) => table.status === "ready").length,
    reservedTables: (state) => state.tables.filter((table) => table.status !== "ready").length,
  },
  actions: {
    addFood(tablename, food) {
      const table = this.tables.find(table => table.name === tablename)
      if(table){
        const index = table.foods.findIndex(item => item.name === food.name)
        if(index === -1){
          table.foods.push({...food, quantity: food.quantity})
        }else{
          table.foods[index].quantity += food.quantity;
        }
        //calculate total
        table.total = table.foods.reduce((acc, item) => acc + item.price * item.quantity, 0)
      }      
    },
    clearTable(tablename) {
      const table = this.tables.find(table => table.name === tablename)
      table.checkin = ""
      table.checkout = ""
      table.total = 0
      table.users = 0
      table.status = "ready"
      table.foods = []
    }
  }
});

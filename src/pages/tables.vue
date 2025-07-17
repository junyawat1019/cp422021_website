<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";
import { useTableStore } from "@/store/table";

const tableStore = useTableStore();
const reserveTable = (table) => {
  table.status = 'reserve'
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB');
  table.checkin = timeString;
  table.showInfo = true;
}
const checkoutTable = (table) => {
  table.status = 'ready';
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB');
  table.checkin = timeString;
  table.showInfo = false;
  table.total = 0;
  table.users = 0;
  table.foods = [];
  table.checkin = "";
  table.checkout = "";
}

</script>
<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะทั้งหมด"
            :stats="tableStore.totalTables"
            unit="ตัว"
            icon="mdi-table"
            color="primary"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะว่าง"
            :stats="tableStore.readyTables"
            unit="ตัว"
            icon="mdi-table-plus"
            color="success"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="ใช้งานอยู่"
            :stats="tableStore.reservedTables"
            unit="ตัว"
            icon="mdi-table-account"
            color="warning"
          />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn                
              class="fill-height"
              variant="text"
              block
              text
            >
              <VIcon>mdi-plus</VIcon>
              เพิมโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard class="mt-8">
  <VCardText>
    <VRow class="mt-4" dense>
<VCol v-for="table in tableStore.tables" :key="table.name" cols="2" class="d-flex align-center justify-center">
  <div class="w-100">
    <v-btn v-if="!table.showInfo" @click="reserveTable(table)" block size="x-large" prepend-icon="mdi-table" style="background-color: #a855f7; color: white; height: 200px;">
      {{ table.name }} - {{ table.status }}
    </v-btn>
    <TableInfoCard v-else :table="table" :onCheckout="() => checkoutTable(table)"/>
  </div>
</VCol>
    </VRow>
      </VCardText>
  </VCard>
</template>

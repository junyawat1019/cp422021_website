<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";

import { useTableStore } from "@/store/table";
const tableStore = useTableStore();

const reserveTable = (table) => {
  table.status = 'reserve'
  table.checkin = (new Date()).toLocaleTimeString()
};
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
      <VRow>
        <VCol v-for="table in tableStore.tables" cols="3" class="d-flex align-center justify-center">
          <v-btn v-if="table.status=='ready'" @click="reserveTable(table)" size="x-large" block prepend-icon="mdi-table" height="200">            
            {{ table.name }} - {{ table.status }}
          </v-btn>
          <TableInfoCard v-else :table="table"/>
        </VCol>          
      </VRow>
    </VCardText>
  </VCard>
</template>

<script setup>
const props = defineProps({
  table: Object,
  onCheckout: Function,
});
</script>
<template>
  <VCard class="w-100 h-100">
    <VToolbar flat density="compact" :color="offline? 'grey':'primary'" dark>
      <v-icon class="ml-3">mdi-table</v-icon>
      <v-toolbar-title>
        {{ props.table.name }}        
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <span>{{ props.table.checkin }}</span>
    </VToolbar>
    <VCardText class="pa-3">
      <div class="d-flex justify-space-between">        
        <span><v-icon>mdi-account</v-icon> จำนวนลูกค้า:</span>
        <span>{{ props.table.users }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><v-icon>mdi-food</v-icon> รายการอาหาร:</span>
        <span>{{ props.table.foods.length }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><v-icon>mdi-cash</v-icon> ยอดรวม:</span>
        <span>{{ props.table.total }}</span>
      </div>
    </VCardText>
    <VCardActions class="d-flex align-center justify-center">
      <VBtn color="primary">เพิ่มรายการอาหาร</VBtn>
      <VBtn color="success" @click="props.onCheckout()">ชำระเงิน</VBtn>
    </VCardActions>    
  </VCard>
</template>

<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
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
            :stats="10"
            unit="ตัว"
            icon="mdi-table"
            color="primary"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะว่าง"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-plus"
            color="success"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="ใช้งานอยู่"
            :stats="5"
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
    <VCol
      v-for="n in 10"
      :key="n"
      cols="3"
    >
      <VCard
        class="d-flex align-center justify-center"
        style="background-color: #a855f7; color: white; height: 100px; cursor: pointer;" 
        link=""
        elevation="2"
      >
        <VIcon class="me-2">mdi-table</VIcon>
        โต๊ะที่ {{ n }}
      </VCard>
    </VCol>
  </VRow>
    </VCardText>
  </VCard>
</template>

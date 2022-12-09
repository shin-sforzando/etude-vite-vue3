<script setup lang="ts">
  import OneSection from '@/components/OneSection.vue'
</script>

<template>
  <section>
    <OneSection>
      <template v-slot="{ memberInfo }">
        <dl>
          <dt>Name</dt>
          <dd>{{ memberInfo.name }}</dd>
          <dt>Status</dt>
          <dd>{{ memberInfo.status }}</dd>
        </dl>
      </template>
    </OneSection>
  </section>
</template>

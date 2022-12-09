<script setup lang="ts">
  import { ref } from 'vue'

  import MyInput from '@/components/MyInput.vue'
  import MyRadio from '@/components/MyRadio.vue'
  import MySelect from '@/components/MySelect.vue'

  const currentComponent = ref(MyInput)
  const componentsList = [
    { name: 'MyInput', component: MyInput },
    { name: 'MyRadio', component: MyRadio },
    { name: 'MySelect', component: MySelect },
  ]
  const currentComponentName = ref('MyInput')
  const componentsNameList: string[] = ['MyInput', 'MyRadio', 'MySelect']

  let currentComponentIndex = 0

  const switchComponent = (): void => {
    currentComponentIndex++
    if (componentsList.length <= currentComponentIndex) {
      currentComponentIndex = 0
    }
    currentComponent.value = componentsList[currentComponentIndex].component
    currentComponentName.value = componentsList[currentComponentIndex].name
  }
</script>

<template>
  <p>Current Component: {{ currentComponentName }}</p>
  <KeepAlive>
    <component :is="currentComponent" />
  </KeepAlive>
  <button @click="switchComponent">切り替え</button>
</template>

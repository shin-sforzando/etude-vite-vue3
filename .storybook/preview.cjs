import { setup } from '@storybook/vue3'
import router from '@/router'
import { createPinia } from 'pinia'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

setup((app) => {
  app.use(router)
  app.use(createPinia())
})

import AppTop from '@/views/AppTop.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof AppTop>

const meta: Meta = {
  title: 'views/AppTop',
  component: AppTop,
}

export const Default: Story = {
  render: () => ({
    components: { AppTop },
    template: '<AppTop />',
  }),
}

export default meta

import AppTop from '@/views/AppTop.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof AppTop>

const meta: Meta = {
  title: 'views/AppTop',
  component: AppTop,
  render: (args) => ({
    components: { AppTop },
    template: '<AppTop />',
  }),
  argTypes: {},
}

export const Default: Story = {}

export default meta

import MyInput from '@/components/MyInput.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type Story = StoryObj<typeof MyInput>

const meta: Meta = {
  title: 'components/MyInput',
  component: MyInput,
  render: (args) => ({
    components: { MyInput },
    setup() {
      return { args }
    },
    template: '<MyInput v-bind="args" />',
  }),
  argTypes: {},
}

export const Default: Story = {
  args: {
    modelValue: 'Hello World',
  },
}

export default meta

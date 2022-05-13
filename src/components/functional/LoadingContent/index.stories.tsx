import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "functional/LoadingContent",
  component: Component,
  argTypes: {
    isLoading: { type: "boolean", defaultValue: true },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <Component {...args}>
      <p>loading完了</p>
    </Component>
  )
}

export const Default = Template.bind({})

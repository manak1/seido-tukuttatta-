import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/Button",
  component: Component,
  argTypes: {
    label: { control: "text", defaultValue: "ボタンだよ" },
    isFullWidth: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Primary = Template.bind({})
Primary.args = {
  label: "ボタン",
}
export const Danger = Template.bind({})
Danger.args = {
  label: "ボタン",
  variant: "danger",
}
export const Cancel = Template.bind({})
Cancel.args = {
  label: "ボタン",
  variant: "cancel",
}

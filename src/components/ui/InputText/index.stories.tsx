import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

import InputText from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/InputText",
  component: InputText,
  argTypes: {
    name: { control: "text", defaultValue: "test" },
    value: { control: "text", defaultValue: "test" },
    label: { control: "text", defaultValue: "ラベル" },
    id: { control: "text", defaultValue: "test" },
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof InputText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args) => {
  return <InputText {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: "ラベル",
  value: "test",
  id: "test",
  name: "test",
}
export const Optional = Template.bind({})
Optional.args = {
  label: "ラベル",
  isOptional: true,
  value: "test",
  id: "test",
  name: "test",
}

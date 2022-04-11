import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"
import { useFormContext } from "react-hook-form"

import { rfhProvider } from "../../../../.storybook/provider"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "functional/RfhInputText",
  component: Component,
  decorators: [rfhProvider],
  argTypes: {
    name: { control: "text", defaultValue: "test" },
    value: { control: "text", defaultValue: "test" },
    label: { control: "text", defaultValue: "ラベル" },
    id: { control: "text", defaultValue: "test" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  const { control } = useFormContext()
  return <Component {...args} name="text" control={control} />
}

export const Default = Template.bind({})
Default.args = {
  label: "ラベル",
  value: "test",
  id: "test",
}

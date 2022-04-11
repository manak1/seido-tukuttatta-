import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"
import { useFormContext } from "react-hook-form"
import { rfhProvider } from "../../../../.storybook/provider"
import { thumbnailItems } from "~/constants/select"

export default {
  title: "functional/RfhSelect",
  component: Component,
  decorators: [rfhProvider],
  argTypes: {
    name: { control: "text", defaultValue: "test" },
    value: { control: "text", defaultValue: "test" },
    label: { control: "text", defaultValue: "ラベル" },
    id: { control: "text", defaultValue: "test" },
    items: { control: "array", defaultValue: thumbnailItems },
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

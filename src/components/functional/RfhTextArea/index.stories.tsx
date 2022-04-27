import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useFormContext } from "react-hook-form"

import { rfhProvider } from "../../../../.storybook/provider"

import { thumbnailItems } from "~/constants/select"

import Component from "./index"

export default {
  title: "functional/RfhTextArea",
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

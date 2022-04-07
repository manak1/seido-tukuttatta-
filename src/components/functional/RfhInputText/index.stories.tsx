import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import messages from "~/constants/validationMessage"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "functional/RfhInputText",
  component: Component,
  argTypes: {
    name: { control: "text", defaultValue: "test" },
    value: { control: "text", defaultValue: "test" },
    label: { control: "text", defaultValue: "ラベル" },
    id: { control: "text", defaultValue: "test" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  const { getValues, control } = useForm({
    mode: "onChange",
    resolver: zodResolver(
      z.object({
        test: z.string().min(1, messages.required("ラベル")),
      })
    ),
  })
  return (
    <>
      {getValues("test")}
      <Component {...args} name="test" control={control} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: "ラベル",
  value: "test",
  id: "test",
}

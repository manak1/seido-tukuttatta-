import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import InputText from "./index"
import { useArgs } from "@storybook/client-api"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "InputText",
  component: InputText,
  argTypes: {
    value: { control: "text", defaultValue: "" },
    label: { control: "text", defaultValue: "ラベル" },
    id: { control: "text" },
    onChange: { action: "onChange" },
  },
} as ComponentMeta<typeof InputText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputText> = (args) => {
  const [_, updateArgValues] = useArgs()
  return (
    <InputText {...args} onChange={(value) => updateArgValues({ value })} />
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

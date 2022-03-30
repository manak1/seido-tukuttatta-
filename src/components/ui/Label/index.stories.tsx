import { ComponentStory, ComponentMeta } from "@storybook/react"

import Label from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Label",
  component: Label,
  argTypes: {
    label: { control: "text", defaultValue: "ラベル" },
    required: { control: "boolean" },
  },
} as ComponentMeta<typeof Label>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => {
  return <Label {...args} />
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Required = Template.bind({
  args: {
    required: true,
  },
})

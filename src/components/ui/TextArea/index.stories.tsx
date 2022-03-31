import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "TextArea",
  component: Component,
  argTypes: {
    name: { control: "text", defaultValue: "id" },
    label: { control: "text", defaultValue: "ラベル" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

export const Optional = Template.bind({})
Optional.args = {
  isOptional: true,
}

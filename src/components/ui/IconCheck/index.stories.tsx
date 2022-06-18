import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/IconCheck",
  component: Component,
  argTypes: {
    disabled: { type: "boolean", defaultValue: true },
    value: { type: "boolean", defaultValue: false },
    icon: { type: "string", defaultValue: "thumbsUp" },
    id: { type: "string", defaultValue: "iconcheck" },
    children: { type: "string", defaultValue: "12" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

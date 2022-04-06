import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Square } from "emotion-icons/bootstrap"
import { Add } from "emotion-icons/material"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/IconButton",
  component: Component,
  argTypes: {
    icon: { control: "object", defaultValue: Add },
    onClick: { control: "action" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

export const Square = Template.bind({})
Square.args = {
  variant: "square",
}

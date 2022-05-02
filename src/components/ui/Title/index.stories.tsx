import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/Title",
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args}>タイトルだよ</Component>
}

export const Default = Template.bind({})

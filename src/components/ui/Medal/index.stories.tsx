import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "",
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Gold = Template.bind({
  variant: "gold",
})

export const Silver = Template.bind({
  variant: "silver",
})

export const Bronze = Template.bind({
  varinat: "bronze",
})

import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/Medal",
  component: Component,
  argTypes: {
    children: { defaultValue: "1" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Gold = Template.bind({})
Gold.args = {
  variant: "gold",
}

export const Silver = Template.bind({})
Silver.args = {
  variant: "silver",
}

export const Bronze = Template.bind({})
Bronze.args = {
  variant: "bronze",
}

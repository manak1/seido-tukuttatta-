import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/Icon",
  component: Component,
  argTypes: {
    icon: {
      control: "radio",
      options: ["twitter", "thumbsUp", "thumbsUpFill"],
      defaultValue: "twitter",
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

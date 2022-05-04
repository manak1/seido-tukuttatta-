import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "functional/Spacer",
  component: Component,
  argTypes: {
    size: { type: "number", defaultValue: 32 },
    axis: {
      options: ["none", "horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

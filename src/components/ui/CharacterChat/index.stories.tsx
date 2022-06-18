import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/CharaCterChat",
  component: Component,
  argTypes: {
    icon: {
      type: "string",
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/0/04/Penguin_icon.svg",
    },
    text: { type: "string", defaultValue: "ここにテキストが表示されるよ" },
    direction: { type: "string", defaultValue: "left" },
    name: { type: "string", name: "ぺんぎん君" },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "ui/CharacterChatList",
  component: Component,
  argTypes: {
    chats: {
      defaultValue: [
        {
          name: "ぺんぎんさん",
          text: "ひつじさん！！焼肉たべにいかない！！！？",
          direction: "left" as const,
          icon: "/penchan2.svg",
        },
        {
          name: "ひつじくん",
          text: "いいよ！！！！",
          direction: "right" as const,
          icon: "/sheep.svg",
        },
        {
          name: "ぺんぎんさん",
          text: "やった！！20時にハチ公前集合ね！",
          direction: "left" as const,
          icon: "/penchan2.svg",
        },
      ],
    },
  },
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})

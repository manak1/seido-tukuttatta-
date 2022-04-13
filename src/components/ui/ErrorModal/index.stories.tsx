import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/ErrorModal",
  component: Component,
  argTypes: {
    onClose: { control: "action" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  domId: "root",
  message:
    "ここにエラーメッセージが入ります。うわーエラーが起きてしまいました。大変だーどうにかしなきゃ！",
}

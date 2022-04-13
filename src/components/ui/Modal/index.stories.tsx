import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/Modal",
  component: Component,
  argTypes: {
    onClose: { control: "action" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <Component {...args} domId={"root"}>
      <div
        data-testid="test"
        style={{
          textAlign: "center",
          minHeight: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ここにModalの中身が入るよ
      </div>
    </Component>
  )
}

export const Default = Template.bind({})
Default.args = {}

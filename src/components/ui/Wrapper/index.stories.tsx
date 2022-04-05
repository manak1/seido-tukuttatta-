import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Wrapper",
  component: Component,
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return (
    <Component {...args}>
      <p style={{ backgroundColor: "#d3d3d3", textAlign: "center" }}>
        maxWidth 640px
      </p>
    </Component>
  )
}

export const Default = Template.bind({})

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { placeholderSystem } from "~/constants/companySystem"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "model/CompanySystem/CompanySystemThumbnail",
  component: Component,
  argTypes: {
    companySystem: { defaultValue: placeholderSystem },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})
Default.args = {}

export const Glass = Template.bind({})
Glass.args = {
  companySystem: {
    ...placeholderSystem,
    thumbnailType: "2",
  },
}

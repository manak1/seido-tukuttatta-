import { ComponentStory, ComponentMeta } from "@storybook/react"

import { navLinks } from "~/constants/navbar"

import NavBottom from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ui/NavBottom",
  component: NavBottom,
  argTypes: {
    links: { control: "array", defaultValue: navLinks },
  },
} as ComponentMeta<typeof NavBottom>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavBottom> = (args) => {
  return <NavBottom {...args} />
}

export const Default = Template.bind({})
Default.args = {
  links: navLinks,
}

import { ComponentStory, ComponentMeta } from "@storybook/react"

import NavBottom from "./index"

import { navLinks } from "~/constants/navbar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "NavBottom",
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

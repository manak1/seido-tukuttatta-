import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "model/companySystem/CreatedCompanySystemModal",
  component: Component,
  argTypes: {
    onClose: { control: "action" },
    isOpen: { control: "boolean", defaultValue: true },
    companyName: { control: "string", defaultValue: "コーラ飲み放題制度" },
    onConfirm: { control: "action" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} domId={"root"} />
}

export const Default = Template.bind({})
Default.args = {}

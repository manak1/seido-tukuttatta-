import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component, { CreatedCompanySystemModalProps } from "./index"

const companySystem: CreatedCompanySystemModalProps["companySystem"] = {
  name: "コーラ飲み放題制度",
  description:
    "勤務時間中に購入したコカコーラ社のコーラの経費で立て替えます。一日最大10本まで購入可能。",
  id: 1,
  thumbnailType: "1",
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "model/companySystem/CreatedCompanySystemModal",
  component: Component,
  argTypes: {
    onClose: { control: "action" },
    isOpen: { control: "boolean", defaultValue: true },
    companySystem: { control: "object", defaultValue: companySystem },
    onConfirm: { control: "action" },
  },
} as ComponentMeta<typeof Component>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} domId={"root"} />
}

export const Default = Template.bind({})
Default.args = {}

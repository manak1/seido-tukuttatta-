import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

const companySystemList = new Array(5).fill(null).map((_, index) => ({
  id: index,
  name: "おひるねし放題制度",
  description:
    "業務時間内中に一度だけ昼寝する事を可能にする制度。二度寝は禁止で、昼寝開始から終了までの睡眠時間を業務時間として申請することができる。",
  thumbnailType: "2",
  author: "manaki",
  number: index,
}))

export default {
  title: "model/companySystem/CompanySystemRanking",
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})
Default.args = {
  companySystems: companySystemList,
}

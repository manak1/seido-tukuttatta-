---
to: src/components/<%= path %>/<%= name %>/index.stories.tsx
---

import { ComponentStory, ComponentMeta } from "@storybook/react"

import Component from "./index"

export default {
  title: "",
  component: Component,
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />
}

export const Default = Template.bind({})
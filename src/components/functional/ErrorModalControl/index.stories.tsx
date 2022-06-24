import { ComponentStory, ComponentMeta } from "@storybook/react"
import { useCallback, useEffect } from "react"

import { useModalError } from "~/hooks/modalError"

import { recoilProvider } from "../../../../.storybook/provider"

import Component from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "functional/ErrorModalControl",
  component: Component,
  decorators: [recoilProvider],
  argTypes: {},
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => {
  const { addError } = useModalError()

  const handleAddError = useCallback(() => {
    addError({
      name: "エラーが発生しました。",
      message: "エラーが発生しました。",
    })
  }, [addError])

  useEffect(() => {
    handleAddError()
  }, [])

  return (
    <>
      <button onClick={handleAddError}>エラーを追加する</button>
      <Component {...args} domId="root" />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {}

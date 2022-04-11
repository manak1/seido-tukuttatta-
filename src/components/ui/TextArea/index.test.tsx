import { userEvent } from "@storybook/testing-library"
import { composeStories } from "@storybook/testing-react"

import { render, screen } from "~/test/test-utils"

import * as stories from "./index.stories"
const { Default, Optional } = composeStories(stories)

describe("TextAreaのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })
  it("入力するとonChangeが呼ばれる", () => {
    const onChange = jest.fn()
    render(<Default onChange={onChange} />)
    userEvent.type(screen.getByRole("textbox"), "テスト")
    expect(onChange).toBeCalledTimes(3)
  })
  it("任意の文字が表示されている", () => {
    render(<Optional />)
    expect(screen.getByText("任意")).toBeInTheDocument()
  })
})

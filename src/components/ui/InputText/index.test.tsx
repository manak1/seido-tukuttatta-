import userEvent from "@testing-library/user-event"
import { render, screen } from "~/test/test-utils"

import * as stories from "./index.stories"
import { composeStories } from "@storybook/testing-react"

const { Default, Optional } = composeStories(stories)

describe("InputTextのテスト", () => {
  const onChange = jest.fn()
  it("snapshot", () => {
    const { asFragment } = render(<Default onChange={onChange} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it("labelが表示される", () => {
    render(<Default onChange={onChange} />)
    expect(screen.getByLabelText("ラベル")).toBeInTheDocument()
  })
  it("初期値が表示される", () => {
    render(<Default onChange={onChange} />)
    expect(screen.getByRole("textbox")).toHaveValue("test")
  })
  it("idが設定されている", () => {
    render(<Default onChange={onChange} />)
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "test")
  })
  it("任意の文字が表示される", () => {
    render(<Optional onChange={onChange} />)
    expect(screen.getByText("任意")).toBeInTheDocument()
  })
  it("入力時にonChangeが呼ばれる", async () => {
    render(<Default onChange={onChange} />)
    const input = screen.getByRole("textbox")
    userEvent.type(input, "テスト")
    expect(onChange).toBeCalledTimes(3)
  })
})

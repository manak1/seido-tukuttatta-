import { userEvent } from "@storybook/testing-library"
import { render, screen } from "~/test/test-utils"
import TextArea from "./index"

describe("TextAreaのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(
      <TextArea name="test" label="テキストエリア" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it("入力するとonChangeが呼ばれる", () => {
    const onChange = jest.fn()
    render(<TextArea name="test" label="テキストエリア" onChange={onChange} />)
    userEvent.type(screen.getByRole("textbox"), "テスト")
    expect(onChange).toBeCalledTimes(3)
  })
  it("任意の文字が表示されている", () => {
    const onChange = jest.fn()
    render(
      <TextArea
        name="test"
        label="テキストエリア"
        isOptional
        onChange={onChange}
      />
    )
    expect(screen.getByText("任意")).toBeInTheDocument()
  })
})

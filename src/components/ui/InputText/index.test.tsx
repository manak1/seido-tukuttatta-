import { render, screen } from "@testing-library/react"
import InputText from "./index"
import userEvent from "@testing-library/user-event"

describe("InputTextのテスト", () => {
  const onChange = jest.fn()

  it("snapshot", () => {
    const { asFragment } = render(
      <InputText
        value="test"
        label="test"
        id="test"
        placeholder="test"
        onChange={onChange}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("labelが表示される", () => {
    render(
      <InputText
        label="ラベル"
        value=""
        id="test"
        placeholder=""
        onChange={onChange}
      />
    )
    expect(screen.getByLabelText("ラベル")).toBeInTheDocument()
  })

  it("初期値が表示される", () => {
    render(
      <InputText
        label="ラベル"
        value="test"
        id="test"
        placeholder=""
        onChange={onChange}
      />
    )
    expect(screen.getByRole("textbox")).toHaveValue("test")
  })

  it("idが設定されている", () => {
    render(
      <InputText
        label="ラベル"
        value="test"
        id="test"
        placeholder=""
        onChange={onChange}
      />
    )
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "test")
  })

  it("入力時にonChangeが呼ばれる", async () => {
    render(
      <InputText
        label="ラベル"
        value=""
        id="test"
        placeholder=""
        onChange={onChange}
      />
    )
    const input = screen.getByLabelText("ラベル")
    userEvent.type(input, "テスト")
    expect(onChange).toBeCalledTimes(3)
  })
})

import { userEvent } from "@storybook/testing-library"
import { render, screen } from "~/test/test-utils"
import Button from "./index"

describe("Buttonのテスト", () => {
  const onClick = jest.fn()

  it("snapshot", () => {
    const { asFragment } = render(<Button label="ボタン" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("disabled時にonChangeが呼ばれない", () => {
    render(<Button label="ボタン" onClick={onClick} disabled />)
    userEvent.click(screen.getByRole("button"))
    expect(onClick).not.toBeCalled()
  })

  it("clickするとonChangeが呼ばれる", () => {
    render(<Button label="ボタン" onClick={onClick} />)
    userEvent.click(screen.getByRole("button"))
    expect(onClick).toBeCalledTimes(1)
  })
})

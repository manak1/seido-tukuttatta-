import { userEvent } from "@storybook/testing-library"
import { composeStories } from "@storybook/testing-react"

import { render, screen } from "~/test/test-utils"

import * as stories from "./index.stories"
const { Primary } = composeStories(stories)

describe("Buttonのテスト", () => {
  const onClick = jest.fn()

  it("snapshot", () => {
    const { asFragment } = render(<Primary />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("disabled時にonChangeが呼ばれない", () => {
    render(<Primary onClick={onClick} disabled />)
    userEvent.click(screen.getByRole("button"))
    expect(onClick).not.toBeCalled()
  })

  it("clickするとonChangeが呼ばれる", () => {
    render(<Primary onClick={onClick} />)
    userEvent.click(screen.getByRole("button"))
    expect(onClick).toBeCalledTimes(1)
  })
})

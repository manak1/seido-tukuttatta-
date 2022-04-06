import { render, screen } from "~/test/test-utils"
import * as stories from "./index.stories"
import { composeStories } from "@storybook/testing-react"
const { Default } = composeStories(stories)

describe("HeaderBackのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("titleが表示されている", () => {
    render(<Default />)
    expect(screen.getByText("タイトル")).toBeInTheDocument()
  })
})

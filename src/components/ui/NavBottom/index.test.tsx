import { render } from "~/test/test-utils"
import * as stories from "./index.stories"
import { composeStories } from "@storybook/testing-react"

const { Default } = composeStories(stories)

describe("NavBottomテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })
})

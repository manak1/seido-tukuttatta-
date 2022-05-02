---
to: src/components/<%= path %>/<%= name %>/index.test.tsx
---

import { composeStories } from "@storybook/testing-react"

import { render } from "~/test/test-utils"

import * as stories from "./index.stories"
const { Default } = composeStories(stories)

describe("<%= name %>のテスト", () => {

  it("snapshot", () => {
    const { asFragment } = render(<Default />)
    expect(asFragment()).toMatchSnapshot()
  })
})

import { render, screen } from "@testing-library/react"
import Label from "./index"

describe("InputTextのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Label label="ラベル" />)
    expect(asFragment()).toMatchSnapshot()
  })
})

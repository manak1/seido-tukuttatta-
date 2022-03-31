import { render } from "~/test/test-utils"
import Label from "./index"

describe("InputTextのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Label label="ラベル" />)
    expect(asFragment()).toMatchSnapshot()
  })
})

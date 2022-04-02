import { render } from "~/test/test-utils"
import Select from "./index"

describe("Selectのテスト", () => {
  test("snapshot", () => {
    const { asFragment } = render(
      <Select
        name="test"
        label="ラベル"
        items={[{ value: "1", label: "テスト1" }]}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

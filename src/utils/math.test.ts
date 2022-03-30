import { add } from "./math"

describe("math.tsのテスト", () => {
  test("1+1が2になる", () => {
    expect(add(1, 1)).toBe(2)
  })
})

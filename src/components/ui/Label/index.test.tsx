import { render, screen } from "@testing-library/react"
import Label from "./index"

describe("InputTextのテスト", () => {
  it("snapshot", () => {
    const { asFragment } = render(<Label label="ラベル" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("required時に*が表示される", () => {
    render(<Label label="ラベル" required />)
    expect(screen.getByText("*")).toBeInTheDocument()
  })
})

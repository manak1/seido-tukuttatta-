import { ThemeProvider } from "@emotion/react"
import { RenderOptions } from "@storybook/addons"
import { render } from "@testing-library/react"
import React, { ReactElement } from "react"

import { theme } from "~/styles/theme"

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options })

export * from "@testing-library/react"
export { customRender as render }

import styled from "@emotion/styled"

export const Wrapper = styled.label(
  {
    display: "inline-block",
    borderRadius: "9999px",
    padding: "8px",
    cursor: "pointer",
  },
  ({ theme }) => ({})
)

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
})

export const CheckBox = styled.input({
  display: "none",
})

export const Text = styled.p(
  {
    fontWeight: "bold",
    marginLeft: "4px",
  },
  ({ theme, color }) => ({
    fontSize: theme.fontSizes.small,
  })
)

import styled from "@emotion/styled"

export const Button = styled.button(
  {
    width: "56px",
    height: "56px",
    borderRadius: "9999px",
    position: "relative",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.primary,
    ...theme.focus(),
  })
)

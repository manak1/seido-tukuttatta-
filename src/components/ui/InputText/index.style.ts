import styled from "@emotion/styled"

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
})

export const Box = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
})

export const OptionalText = styled.div(
  {
    color: "#d3d3d3",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.xsmall,
  })
)

export const Input = styled.input(
  {
    marginTop: "8px",
    padding: "10px 8px",
    outline: "none",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.default,
    ...theme.focus(),
  })
)

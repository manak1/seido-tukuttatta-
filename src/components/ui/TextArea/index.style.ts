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

export const TextArea = styled.textarea(
  {
    outline: "none",
    border: "1px solid #d3d3d3",
    marginTop: "4px",
    padding: "8px",
    minHeight: "180px",
    borderRadius: "8px",
    resize: "none",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.default,
    ...theme.focus(),
  })
)

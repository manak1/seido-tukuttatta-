import styled from "@emotion/styled"
import { ChevronDown } from "@emotion-icons/fa-solid"

export const Select = styled.select(
  {
    width: "100%",
    marginTop: "8px",
    padding: "10px 8px",
    outline: "none",
    border: "1px solid #d3d3d3",
    borderRadius: "8px",
    appearance: "none",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.default,
    backgroundColor: theme.colors.white,
    ...theme.focus(),
  })
)

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

export const SelectBox = styled.div({
  position: "relative",
})

export const Icon = styled(ChevronDown)(
  {
    position: "absolute",
    right: "5px",
    top: "14px",
    width: "16px",
    height: "16px",
    color: "#333",
  },
  ({ theme }) => ({
    "&:focus-visible": {
      color: theme.colors.primary,
    },
  })
)

export const Wrapper = styled.div(
  {
    display: "flex",
    flexDirection: "column",
  },
  ({ theme }) => ({
    "&:focus-within": {
      [Icon as any]: {
        color: theme.colors.primary,
      },
    },
  })
)

export const Option = styled.option({})

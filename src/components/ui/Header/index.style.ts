import styled from "@emotion/styled"

export const Header = styled.header(
  {
    display: "flex",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.primary,
    padding: "8px 16px",
  })
)

export const Title = styled.h1({}, ({ theme }) => ({
  color: theme.colors.white,
  fontSize: theme.fontSizes.medium,
  margin: 0,
}))

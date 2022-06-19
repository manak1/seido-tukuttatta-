import styled from "@emotion/styled"

export const SystemNumber = styled.p(
  {
    fontWeight: "500",
    margin: 0,
    lineHeight: "0.8",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
  })
)

export const Description = styled.p({
  fontWeight: "500",
  lineHeight: "1.75",
  margin: "0",
})

export const Author = styled.p(
  {
    margin: "0",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.small,
  })
)

export const CreatedDate = Author

export const Divider = styled.hr({}, ({ theme }) => ({
  borderColor: theme.colors.gray,
}))

export const Share = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "20px",
})

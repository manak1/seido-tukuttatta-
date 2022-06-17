import styled from "@emotion/styled"

export const Wrapper = styled.div({
  padding: "20px",
  textAlign: "center",
})

export const Title = styled.h2({}, ({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  fontWeight: 500,
}))

export const ImageWrapper = styled.div(
  {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    margin: "56px auto 0 auto",
    width: "60px",
    height: "60px",
    textAlign: "center",
    borderRadius: "50%",
    padding: "4px",
  },
  ({ theme }) => ({
    border: `1px solid ${theme.colors.gray}`,
    "::after": {
      position: "absolute",
      top: "-50px",
      left: "-24px",
      content: '""',
      width: "1px",
      height: "52px",
      display: "inline-block",
      backgroundColor: theme.colors.black,
      transform: "rotate(135deg)",
    },
    "::before": {
      position: "absolute",
      top: "-35px",
      left: "80px",
      content: '""',
      width: "1px",
      height: "40px",
      display: "inline-block",
      backgroundColor: theme.colors.black,
      transform: "rotate(35deg)",
    },
  })
)

export const Logo = styled.img({
  width: "52px",
  height: "52px",
})

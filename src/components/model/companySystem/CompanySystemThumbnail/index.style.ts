import styled from "@emotion/styled"

type LineLengthProps = { lineLength: number }

export const Thumbnail = styled.div({
  width: "100%",
  height: "210px",
  backgroundImage: "url('/test.svg')",
  backgroundSize: "cover",
  padding: "15px 48px",
})

export const Title = styled.h2({}, ({ theme }) => ({
  margin: 0,
  fontSize: theme.fontSizes.large,
  color: "red",
  height: "36px",
}))

export const Description = styled.p({}, ({ theme }) => ({
  margin: 0,
  marginTop: "8px",
  lineHeight: "1.65",
  fontSize: theme.fontSizes.default,
  WebkitLineClamp: "3",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
}))

export const Author = styled.p({}, ({ theme }) => ({
  margin: 0,
  lineHeight: "1",
  marginTop: "16px",
  fontWeight: "bold",
  fontSize: theme.fontSizes.small,
}))

export const Gradient = {
  Thumbnail: styled.div(
    {
      width: "100%",
      height: "198px",
      background: "linear-gradient(0.25turn, #987FF9, #7ABFFF)",
      backgroundSize: "cover",
      padding: "10px",
    },
    ({ theme }) => ({
      [theme.mq.md]: {
        width: "350px",
        margin: "0 auto",
      },
    })
  ),
  Wrapper: styled.div({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
    borderRadius: "12px",
    padding: "10px 20px",
  }),
  Title: styled.h2({}, ({ theme }) => ({
    margin: 0,
    fontSize: theme.fontSizes.large,
    letterSpacing: theme.letterSpacing.wide,
    lineBreak: "anywhere",
    lineHeight: "1.4",
    maxHeight: "76px",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  })),
  Description: styled.p<LineLengthProps>({}, ({ theme, lineLength }) => ({
    margin: 0,
    marginTop: "8px",
    lineHeight: "1.65",
    fontSize: theme.fontSizes.small,
    WebkitLineClamp: lineLength === 1 ? "3" : "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    minHeight: "48px",
  })),
  Box: styled.div({
    marginTop: "4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  Spacer: styled.div({
    flexGrow: "1",
  }),
  Author: styled.p({}, ({ theme }) => ({
    margin: 0,
    lineHeight: "1",
    fontWeight: "bold",
    fontSize: theme.fontSizes.small,
  })),
  Logo: styled.img({
    width: "33px",
    height: "33px",
  }),
}

export const Glass = {
  Thumbnail: styled.div(
    {
      width: "100%",
      height: "198px",
      backgroundImage: "url('/garasuhu.svg')",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ({ theme }) => ({
      [theme.mq.md]: {
        width: "350px",
        margin: "0 auto",
      },
    })
  ),
  Wrapper: styled.div({}),
  Title: styled.h2({}, ({ theme }) => ({
    margin: "-10px 0 0 0",
    fontSize: theme.fontSizes.large,
    letterSpacing: theme.letterSpacing.wide,
    lineBreak: "anywhere",
    maxWidth: "11ch",
    minHeight: "36px",
    WebkitLineClamp: "3",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  })),
  Box: styled.div({
    marginTop: "4px",
    display: "flex",
    alignItems: "center",
  }),
  Author: styled.p({}, ({ theme }) => ({
    margin: "0 0 0 8px",
    lineHeight: "1",
    fontWeight: "normal",
    fontSize: theme.fontSizes.xsmall,
  })),
  Logo: styled.img({
    width: "33px",
    height: "33px",
  }),
}

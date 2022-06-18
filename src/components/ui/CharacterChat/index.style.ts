import styled from "@emotion/styled"

import { CharacterChatProps } from "."

export const Wrapper = styled.div<Pick<CharacterChatProps, "direction">>(
  {
    display: "flex",
    alignItems: "flex-end",
  },
  ({ direction }) => ({
    flexDirection: direction === "left" ? "row-reverse" : "row",
  })
)

export const Chat = styled.p<Pick<CharacterChatProps, "direction">>(
  {
    flexGrow: "1",
    display: "flex",
    margin: "0",
    padding: "24px",
    whiteSpace: "break-spaces",
  },
  ({ theme, direction }) => ({
    backgroundColor: theme.colors.chat,
    borderRadius:
      direction === "left" ? "24px 24px  24px 0" : "24px 24px 0 24px",
  })
)

export const Box = styled.div<Pick<CharacterChatProps, "direction">>(
  {
    textAlign: "center",
  },
  ({ direction }) => ({
    margin: direction === "left" ? "0 16px 0 0" : "0 0 0 16px",
  })
)

export const Icon = styled.img<Pick<CharacterChatProps, "direction">>(
  {
    width: "52px",
    height: "52px",
    padding: "4px",
    borderRadius: "50%",
  },
  ({ theme }) => ({
    border: `1px solid ${theme.colors.gray}`,
  })
)

export const Name = styled.p(
  {
    margin: "0",
    wordBreak: "keep-all",
  },
  ({ theme }) => ({
    fontSize: theme.fontSizes.xxsmall,
  })
)

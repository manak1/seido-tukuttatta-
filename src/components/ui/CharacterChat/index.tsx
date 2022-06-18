import React from "react"

import * as Styled from "./index.style"

type CharacterDirection = "left" | "right"

export type CharacterChatProps = {
  text: string
  icon: string
  name: string
  direction?: CharacterDirection
} & React.ComponentProps<"div">

const CharacterChat: React.VFC<CharacterChatProps> = (props) => {
  const { text, icon, direction = "right", name, ...rest } = props
  return (
    <Styled.Wrapper direction={direction} {...rest}>
      <Styled.Chat direction={direction}>{text}</Styled.Chat>
      <Styled.Box direction={direction}>
        <Styled.Icon direction={direction} src={icon} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.Box>
    </Styled.Wrapper>
  )
}

export default CharacterChat

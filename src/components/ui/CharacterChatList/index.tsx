import React from "react"

import CharacterChat, { CharacterChatProps } from "../CharacterChat"
import * as Styled from "./index.style"

export type CharacterChatListProps = {
  chats: CharacterChatProps[]
}

const CharacterChatList: React.VFC<CharacterChatListProps> = (props) => {
  const { chats } = props
  return (
    <Styled.List>
      {chats.map((chat) => (
        <Styled.ListItem key={chat.text}>
          <CharacterChat {...chat} />
        </Styled.ListItem>
      ))}
    </Styled.List>
  )
}

export default CharacterChatList

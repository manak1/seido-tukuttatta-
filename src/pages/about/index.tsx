import ButtonLink from "~/components/ui/ButtonLink"
import CharacterChatList from "~/components/ui/CharacterChatList"
import Divider from "~/components/ui/Divider"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import type { NextPage } from "next"

import { chat1, chat2 } from "~/constants/about"

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Spacer size={12} />
      <Title>ある日...</Title>
      <Spacer size={8} />
      <CharacterChatList chats={chat1} />
      <Spacer size={24} />
      <Divider />
      <Spacer size={24} />
      <Title>後日...</Title>
      <Spacer size={24} />
      <CharacterChatList chats={chat2} />
      <Spacer size={24} />
      <ButtonLink href="/s/create" size="small" isFullWidth>
        ひつじくんを手伝う
      </ButtonLink>
      <Spacer size={12} />
      <ButtonLink href="/s/new" size="small" variant="outline" isFullWidth>
        いろんな制度を見る
      </ButtonLink>
    </DefaultLayout>
  )
}

export default Home

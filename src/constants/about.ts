import { CharacterChatProps } from "~/components/ui/CharacterChat"

export const chat1: CharacterChatProps[] = [
  {
    name: "ぺんぎんさん",
    text: "羊さん！！大変だ！！",
    direction: "left" as const,
    icon: "/penchan2.svg",
  },
  {
    name: "ひつじくん",
    text: "どうしたのぺんぎんさん？",
    direction: "right" as const,
    icon: "/sheep.svg",
  },
  {
    name: "ぺんぎんさん",
    text: "株式会社ねむペンっていう会社を作ったんだけど、まだ制度がひとつもないんだ...",
    direction: "left" as const,
    icon: "/penchan2.svg",
  },
  {
    name: "ぺんぎんさん",
    text: "これじゃあ誰も入社してくれないよ(´・ω・`)",
    direction: "left" as const,
    icon: "/penchan2.svg",
  },
  {
    name: "ひつじくん",
    text: "（そもそもそんな会社誰か入ってくれるのか...?）",
    direction: "right" as const,
    icon: "/sheep.svg",
  },
  {
    name: "ひつじくん",
    text: "わ、わかりました！どうぶつさんが入ってくれそうな制度考えてみます！",
    direction: "right" as const,
    icon: "/sheep.svg",
  },
]

export const chat2: CharacterChatProps[] = [
  {
    name: "ひつじくん",
    text: `う〜ん... 困ったなあ\n全然良い制度おもいつかばない...`,
    direction: "right" as const,
    icon: "/sheep.svg",
  },
  {
    name: "ひつじくん",
    text: `そうだ！そこの君！！新しい制度考えるの手伝ってくれないかい？`,
    direction: "right" as const,
    icon: "/sheep.svg",
  },
]

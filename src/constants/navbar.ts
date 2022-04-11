import { Home, Search, EmojiEvents, Tag } from "@emotion-icons/material"

import { NavItem } from "~/components/ui/NavBottom"

export const navLinks: NavItem[] = [
  {
    label: "ホーム",
    href: "/",
    icon: Home,
  },
  {
    label: "検索",
    href: "/search",
    icon: Search,
  },
  {
    label: "ランキング",
    href: "/ranking",
    icon: EmojiEvents,
  },
  {
    label: "タグ",
    href: "/tag",
    icon: Tag,
  },
]

import { Home, Search, EmojiEvents, FiberNew } from "@emotion-icons/material"

import { NavItem } from "~/components/ui/NavBottom"

export const navLinks: NavItem[] = [
  {
    label: "ホーム",
    href: "/",
    icon: Home,
  },
  {
    label: "検索",
    href: "/s/search",
    icon: Search,
  },
  {
    label: "ランキング",
    href: "/s/ranking",
    icon: EmojiEvents,
  },
  {
    label: "新着",
    href: "/s/new",
    icon: FiberNew,
  },
]

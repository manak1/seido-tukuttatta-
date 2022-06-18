import { Home, Help, EmojiEvents, FiberNew } from "@emotion-icons/material"

import { NavItem } from "~/components/ui/NavBottom"

export const navLinks: NavItem[] = [
  {
    label: "ホーム",
    href: "/",
    icon: Home,
  },
  {
    label: "新着",
    href: "/s/new",
    icon: FiberNew,
  },
  {
    label: "ランキング",
    href: "/s/ranking",
    icon: EmojiEvents,
  },
  {
    label: "制度作ったったーについて",
    href: "/about",
    icon: Help,
  },
]

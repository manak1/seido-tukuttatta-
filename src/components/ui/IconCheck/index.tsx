import React, { useMemo } from "react"

import Icon, { IconProps, ICONS } from "../Icon"
import * as Styled from "./index.style"

export type IconCheckProps = Omit<React.ComponentProps<"label">, "onChange"> & {
  value: boolean
  onChange: (checked: boolean) => void
  icon: CheckIcons
  disabled: boolean
}

type CheckBoxState = "checked" | "unchecked"

type CheckIcons = keyof Pick<typeof ICONS, "thumbsUp" | "twitter">

type IconCheck = {
  [key in CheckIcons]: Record<CheckBoxState, IconProps["icon"]>
}

const CHECK_ICONS: IconCheck = {
  thumbsUp: {
    unchecked: "thumbsUp",
    checked: "thumbsUpFill",
  },
  twitter: {
    unchecked: "twitter",
    checked: "twitter",
  },
}

const IconCheck: React.FC<IconCheckProps> = (props) => {
  const { value, onChange, icon, children, disabled, ...rest } = props

  const getIcon = useMemo(
    () => CHECK_ICONS[icon][value ? "checked" : "unchecked"],
    [icon, value]
  )
  return (
    <Styled.Wrapper {...rest}>
      <Styled.Box>
        <Styled.CheckBox
          type="checkbox"
          disabled={disabled}
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
        />
        <Icon icon={getIcon} />
        <Styled.Text>{children}</Styled.Text>
      </Styled.Box>
    </Styled.Wrapper>
  )
}

export default IconCheck

import React from "react"
import { styles } from "./index.style"

type Props = React.ComponentProps<"label"> & {
  label: string
  required?: boolean
}

const Label: React.VFC<Props> = (props) => {
  const { label, required, ...rest } = props
  return (
    <label {...rest} css={styles.label}>
      {required && <span css={styles.required}>*</span>}
      {label}
    </label>
  )
}

export default Label

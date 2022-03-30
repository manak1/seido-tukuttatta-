import React from "react"
import Label from "../Label"

import { styles } from "./index.style"

type Props = React.ComponentProps<"input"> & {
  name: string
  label: string
  required?: boolean
}

const InputText: React.VFC<Props> = (props) => {
  const { name, label, required, ...rest } = props
  return (
    <div css={styles.wrapper}>
      <Label htmlFor={name} label={label} required={required} />
      <input css={styles.input} id={name} type="text" {...rest} />
    </div>
  )
}

export default InputText

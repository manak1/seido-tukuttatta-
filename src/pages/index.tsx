import { ChangeEventHandler, useState } from "react"

import InputText from "~/components/ui/InputText"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const [value, setValue] = useState("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value)

  return (
    <InputText
      name="labelName"
      value={value}
      onChange={handleChange}
      placeholder="入力してね"
      label="ラベル"
      id="入力"
    />
  )
}

export default Home

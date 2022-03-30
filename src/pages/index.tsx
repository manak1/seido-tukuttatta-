import type { NextPage } from "next"

import InputText from "~/components/ui/InputText"
import { useState } from "react"

const Home: NextPage = () => {
  const [value, setValue] = useState("")
  return (
    <InputText
      value={value}
      onChange={setValue}
      placeholder="入力してね"
      label="ラベル"
      id="入力"
    />
  )
}

export default Home

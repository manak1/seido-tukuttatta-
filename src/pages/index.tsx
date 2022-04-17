import { css } from "@emotion/react"
import { Add } from "emotion-icons/material"
import { ChangeEventHandler, useState } from "react"
import { useForm } from "react-hook-form"

import Button from "~/components/ui/Button"
import IconButton from "~/components/ui/IconButton"
import InputText from "~/components/ui/InputText"
import NavBottom from "~/components/ui/NavBottom"
import Select from "~/components/ui/Select"
import TextArea from "~/components/ui/TextArea"

import RfhInputText from "~/components/functional/RfhInputText"

import DefaultLayout from "~/layouts/DefaultLayout"

import type { NextPage } from "next"

import { navLinks } from "~/constants/navbar"

const Home: NextPage = () => {
  const [value, setValue] = useState("")

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setValue(e.target.value)

  const items = [
    {
      label: "パターン1",
      value: "1",
    },
    {
      label: "パターン2",
      value: "2",
    },
  ]

  const form = {
    name: "",
  }

  type Form = typeof form

  const { control } = useForm<Form>({
    mode: "onChange",
  })

  return (
    <DefaultLayout>
      <RfhInputText
        label="テスト"
        placeholder="テスト"
        control={control}
        name="name"
        rules={{
          required: "必須です",
        }}
      />
      <InputText
        name="test"
        value={value}
        onChange={handleChange}
        placeholder="入力してね"
        label="ラベル"
        id="入力"
        isOptional
      />
      <TextArea
        isOptional
        label="ラベルだよ"
        name="会社概要"
        placeholder="会社だよ"
      />
      <Button label="ボタン" variant="danger" />
      <Select items={items} label="パターン" />
      <NavBottom
        links={navLinks}
        css={css`
          position: fixed;
          left: 0;
          margin: 0;
          bottom: 0;
        `}
      />
      <IconButton icon={Add} size="small" variant="transparent" />
      <h1>
        aaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </h1>
      <h2>{value}</h2>
    </DefaultLayout>
  )
}

export default Home

import { zodResolver } from "@hookform/resolvers/zod"
import { NextPage } from "next"
import { useForm } from "react-hook-form"

import { companySystemSchema } from "~/libs/zod"

import Button from "~/components/ui/Button"
import Label from "~/components/ui/Label"

import RfhInputText from "~/components/functional/RfhInputText"
import RfhSelect from "~/components/functional/RfhSelect"
import RfhTextArea from "~/components/functional/RfhTextArea"

import DetailLayout from "~/layouts/DetailLayout"

import { CreateCompanySystem } from "~/@types"

import * as Styled from "./index.style"

import { thumbnailItems } from "~/constants/select"

export const CreateSystemPage: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateCompanySystem>({
    mode: "onChange",
    resolver: zodResolver(companySystemSchema),
    defaultValues: {
      name: "",
      description: "",
      author: "",
      thumbnailType: "",
    },
  })

  const onSubmit = (data: CreateCompanySystem) => {
    console.log("submitted for with value", data)
  }

  return (
    <DetailLayout>
      <Styled.Image src="/test.png" />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <RfhInputText
          label="制度の名前は？"
          placeholder="有給取り放題制度"
          name="name"
          control={control}
        />
        <RfhTextArea
          control={control}
          label="どんな制度?"
          name="description"
          placeholder="傷病、育児、家族の看護・介護など、不測の事態、避けられない事態によって、将来、働けなくなるリスクを少しでも解消するために、無制限で有給休暇を取得することが可能です。"
        />
        <RfhInputText
          label="あなたのお名前は？"
          placeholder="@mikeanakida"
          name="author"
          control={control}
        />
        <div>
          <Label label="完成イメージ" />
          <Styled.Image src="/test.png" />
        </div>
        <RfhSelect
          items={thumbnailItems}
          label="制度の名前は？"
          placeholder="有給取り放題制度"
          name="thumbnailType"
          control={control}
        />
        <Button
          type="submit"
          disabled={!isValid}
          isFullWidth
          label="制度をつくる"
        />
      </Styled.Form>
    </DetailLayout>
  )
}

export default CreateSystemPage

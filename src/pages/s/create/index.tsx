import { NextPage } from "next"
import DetailLayout from "~/layouts/DetailLayout"
import InputText from "~/components/ui/InputText"
import RfhTextArea from "~/components/functional/RfhTextArea"
import * as Styled from "./index.style"
import Button from "~/components/ui/Button"
import { useForm } from "react-hook-form"
import { CompanySystem } from "@prisma/client"
import RfhInputText from "~/components/functional/RfhInputText"
import { zodResolver } from "@hookform/resolvers/zod"
import { companySystemSchema } from "~/libs/zod"
import Label from "~/components/ui/Label"
import Select from "~/components/ui/Select"
import { thumbnailItems } from "~/constants/select"

export const CreateSystemPage: NextPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<Omit<CompanySystem, "id">>({
    mode: "onChange",
    resolver: zodResolver(companySystemSchema),
    defaultValues: {
      name: "",
      description: "",
      author: "",
    },
  })

  const onSubmit = (data: Omit<CompanySystem, "id">) => {
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
        <InputText
          label="あなたのお名前は？"
          name="name"
          placeholder="お名前を入力してください。"
        />
        <div>
          <Label label="完成イメージ" />
          <Styled.Image src="/test.png" />
        </div>
        <Select label="サムネイルパターン" items={thumbnailItems} />
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

import { zodResolver } from "@hookform/resolvers/zod"
import { NextPage } from "next"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

import { companySystemSchema } from "~/libs/zod"

import Button from "~/components/ui/Button"
import Label from "~/components/ui/Label"

import RfhInputText from "~/components/functional/RfhInputText"
import RfhTextArea from "~/components/functional/RfhTextArea"
import Spacer from "~/components/functional/Spacer"

import DetailLayout from "~/layouts/DetailLayout"

import { CreateCompanySystem } from "~/@types"
import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import ConfirmCompanySystemModal from "~/components/model/companySystem/ConfirmCompanySystemModal"
import CreatedSystemCompanyModal from "~/components/model/companySystem/CreatedCompanySystemModal"
import {
  usePostCompanySystem,
  useGetInfinityCompanySystems,
} from "~/hooks/api/companySystem"
import { useBoolean } from "~/hooks/boolean"
import { useModalError } from "~/hooks/modalError"
import { preventEventByEnter } from "~/utils/keyDown"

import * as Styled from "./index.style"

import { placeholderSystem } from "~/constants/companySystem"

export const CreateSystemPage: NextPage = () => {
  const [isConfirModalOpen, openConfirmModal, closeConfirmModal] =
    useBoolean(false)
  const { addError } = useModalError()
  const [isSubmitted, setSubmittedTrue] = useBoolean(false)
  const [isCreateModalOpen, openCreatedModal, closeCreatedModal] =
    useBoolean(false)
  const { post } = usePostCompanySystem()
  const { mutate } = useGetInfinityCompanySystems()

  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { isValid },
  } = useForm<CreateCompanySystem>({
    mode: "onChange",
    resolver: zodResolver(companySystemSchema),
    defaultValues: {
      name: "",
      description: "",
      author: "",
    },
  })

  const isButtonDisabled = useMemo(
    () => !isValid || isSubmitted,
    [isSubmitted, isValid]
  )

  const onSubmit = () => {
    openConfirmModal()
  }

  const onConfirm = async () => {
    if (isSubmitted) return
    const formData = getValues()
    const companySystem = await post(formData).catch((error) => {
      addError(error)
    })

    if (companySystem) {
      openCreatedModal()
      closeConfirmModal()
      setSubmittedTrue()
      mutate()
    }
  }

  const formValues = watch()

  const companySystem = useMemo(() => {
    return {
      name: formValues.name === "" ? placeholderSystem.name : formValues.name,
      description:
        formValues.description === ""
          ? placeholderSystem.description
          : formValues.description,
      author:
        formValues.author === "" ? placeholderSystem.author : formValues.author,
    }
  }, [formValues.author, formValues.description, formValues.name])

  return (
    <DetailLayout title="新規作成">
      <CompanySystemThumbnail companySystem={companySystem} />
      <Styled.Form
        onKeyDown={(e) => preventEventByEnter(e)}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          isOptional
        />
        <div>
          <Label label="完成イメージ" />
          <Spacer size={8} />
          <CompanySystemThumbnail companySystem={companySystem} />
        </div>
        <Button type="submit" disabled={isButtonDisabled} isFullWidth>
          制度をつくる
        </Button>
      </Styled.Form>
      <ConfirmCompanySystemModal
        isOpen={isConfirModalOpen}
        onClose={closeConfirmModal}
        onConfirm={onConfirm}
      />
      {isCreateModalOpen && (
        <CreatedSystemCompanyModal
          isOpen={isCreateModalOpen}
          companyName={companySystem.name}
          onClose={closeCreatedModal}
          onConfirm={closeCreatedModal}
        />
      )}
    </DetailLayout>
  )
}

export default CreateSystemPage

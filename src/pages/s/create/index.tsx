import { zodResolver } from "@hookform/resolvers/zod"
import { NextPage } from "next"
import { NextSeo } from "next-seo"
import { useMemo, useState } from "react"
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
import { PAGE_TITLE } from "~/constants/seo"

export const CreateSystemPage: NextPage = () => {
  const [isConfirModalOpen, openConfirmModal, closeConfirmModal] =
    useBoolean(false)
  const { addError } = useModalError()
  const [isSubmitted, setSubmittedTrue] = useBoolean(false)
  const [isCreateModalOpen, openCreatedModal, closeCreatedModal] =
    useBoolean(false)
  const [createdCompanySystemId, setCreatedCompanySystemId] = useState("")
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
    const data = await post(formData).catch((error) => {
      addError(error)
    })

    if (data?.companySystem) {
      setCreatedCompanySystemId(data.companySystem.id)
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
      <NextSeo title={`制度の新規作成 | ${PAGE_TITLE}`} />
      <CompanySystemThumbnail id="createNew" companySystem={companySystem} />
      <Styled.Form
        onKeyDown={(e) => preventEventByEnter(e)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <RfhInputText
          label="制度の名前は？"
          placeholder="おひるねし放題制度"
          name="name"
          control={control}
        />
        <RfhTextArea
          control={control}
          label="どんな制度?"
          name="description"
          placeholder="一日に一度お昼寝することを許可する。二度寝は禁止で睡眠開始から起床までの時間を業務時間として申請する事が出来る制度"
        />
        <RfhInputText
          label="あなたのお名前は？"
          placeholder="ひつじ社員"
          name="author"
          control={control}
          isOptional
        />
        <div>
          <Label label="完成イメージ" />
          <Spacer size={8} />
          <CompanySystemThumbnail
            id="createNew"
            companySystem={companySystem}
          />
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
          id={createdCompanySystemId}
          onClose={closeCreatedModal}
          onConfirm={closeCreatedModal}
        />
      )}
    </DetailLayout>
  )
}

export default CreateSystemPage

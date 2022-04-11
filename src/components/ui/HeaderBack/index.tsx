import { ArrowBack } from "emotion-icons/material"
import { useRouter } from "next/router"
import React, { useCallback } from "react"

import IconButton from "~/components/ui/IconButton"

import * as Styled from "./index.style"

type HeaderBackProps = React.ComponentProps<"header"> & {
  title: string
}

const HeaderBack: React.FC<HeaderBackProps> = (props) => {
  const { title, ...rest } = props
  const router = useRouter()

  const backToPreviousPage = useCallback(() => {
    router.back()
  }, [router])

  return (
    <Styled.Header {...rest}>
      <Styled.Wrapper>
        <IconButton
          onClick={backToPreviousPage}
          size="small"
          icon={ArrowBack}
          variant="transparent"
        />
        <Styled.Title>{title}</Styled.Title>
      </Styled.Wrapper>
    </Styled.Header>
  )
}

export default HeaderBack

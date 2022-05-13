import React, { useEffect, useRef, useState } from "react"

import { CreateCompanySystem } from "~/@types"

import * as Styled from "./index.style"

type CompanySystemThumbnailProps = React.ComponentProps<"div"> & {
  companySystem: CreateCompanySystem
}

const CompanySystemThumbnail: React.FC<CompanySystemThumbnailProps> = (
  props
) => {
  const { companySystem, ...rest } = props

  return <ThumbnailGradient {...rest} companySystem={companySystem} />
}

export default CompanySystemThumbnail

/* ここ以下にサムネパターンを定義 */
const ThumbnailGradient: React.FC<CompanySystemThumbnailProps> = (props) => {
  const { companySystem } = props
  const [titleLineNumber, setTitleLineNumber] = useState(1)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!document) return
    const ref = document.getElementById("gradientTitle")
    if (!ref) return
    const height = ref.clientHeight
    const fontSize = 24
    const lineHeight = 1.4
    const textHeight = fontSize * lineHeight
    setTitleLineNumber(Math.round(height / textHeight))
  }, [companySystem.name])

  return (
    <>
      <Styled.Gradient.Thumbnail>
        <Styled.Gradient.Wrapper>
          <Styled.Gradient.Title id="gradientTitle" ref={titleRef}>
            {companySystem.name}
          </Styled.Gradient.Title>
          <Styled.Gradient.Description lineLength={titleLineNumber}>
            {companySystem.description}
          </Styled.Gradient.Description>
          <Styled.Gradient.Spacer />
          <Styled.Gradient.Box>
            <Styled.Gradient.Author>
              @{companySystem.author}
            </Styled.Gradient.Author>
            <Styled.Gradient.Logo src="/logo.svg" />
          </Styled.Gradient.Box>
        </Styled.Gradient.Wrapper>
      </Styled.Gradient.Thumbnail>
    </>
  )
}

const ThumbnailGlass: React.FC<CompanySystemThumbnailProps> = (props) => {
  const { companySystem } = props
  return (
    <Styled.Glass.Thumbnail>
      <Styled.Glass.Wrapper>
        <Styled.Glass.Title>{companySystem.name}</Styled.Glass.Title>
        <Styled.Glass.Box>
          <Styled.Glass.Logo src="/logo.svg" />
          <Styled.Glass.Author>@{companySystem.author}</Styled.Glass.Author>
        </Styled.Glass.Box>
      </Styled.Glass.Wrapper>
    </Styled.Glass.Thumbnail>
  )
}

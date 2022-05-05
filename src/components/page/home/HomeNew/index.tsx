import React from "react"

import Button from "~/components/ui/Button"
import Title from "~/components/ui/Title"

import Spacer from "~/components/functional/Spacer"

import { CompanySystem } from "~/@types"
import CompanySystemList from "~/components/model/companySystem/CompanySystemList"

import * as Styled from "./index.style"

export type HomeNewProps = {
  companySystems: CompanySystem[]
}

const HomeNew: React.VFC<HomeNewProps> = (props) => {
  const { companySystems } = props
  return (
    <Styled.Wrapper>
      <Title>新しい制度</Title>
      <Spacer axis="vertical" size={12} />
      <CompanySystemList companySystems={companySystems} />
      <Spacer axis="vertical" size={16} />
      <Button isFullWidth variant="outline" size="small">
        もっとみる
      </Button>
    </Styled.Wrapper>
  )
}

export default HomeNew

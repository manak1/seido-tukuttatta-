import { Remark } from "react-remark"

import DefaultLayout from "~/layouts/DefaultLayout"

import term from "~/docs/term.md"

import * as Styled from "./index.style"

import type { NextPage } from "next"

const Term: NextPage = () => {
  return (
    <DefaultLayout>
      <Styled.Wrapper>
        <Remark>{term}</Remark>
      </Styled.Wrapper>
    </DefaultLayout>
  )
}

export default Term

import Link from "next/link"
import React from "react"

import { CompanySystem } from "~/@types"

import CompanySystemThumbnail from "../CompanySystemThumbnail"
import * as Styled from "./index.style"

export type CompanySystemListProps = {
  companySystems: CompanySystem[]
}

const CompanySystemList: React.VFC<CompanySystemListProps> = (props) => {
  const { companySystems } = props
  return (
    <Styled.List>
      {companySystems &&
        companySystems.map((system) => (
          <Styled.Item key={system.id}>
            <Link href={`/s/${system.id}`} passHref>
              <CompanySystemThumbnail companySystem={system} />
            </Link>
          </Styled.Item>
        ))}
    </Styled.List>
  )
}

export default CompanySystemList

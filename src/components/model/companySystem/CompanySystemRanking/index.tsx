import Link from "next/link"
import React from "react"

import { CompanySystem } from "~/@types"

import CompanySystemThumbnail from "../CompanySystemThumbnail"
import * as Styled from "./index.style"

export type CompanySystemListProps = {
  companySystems: CompanySystem[]
}

const CompanySystemRanking: React.VFC<CompanySystemListProps> = (props) => {
  const { companySystems } = props

  const setMedalVariant = (index: number) => {
    if (index + 1 === 1) return "gold"
    if (index + 1 === 2) return "silver"
    return "bronze"
  }

  return (
    <Styled.List>
      {companySystems &&
        companySystems.map((system, index) => (
          <Styled.Item key={system.id}>
            <Link href={`/s/${system.id}`} passHref>
              <Styled.Link>
                <Styled.RankMedal variant={setMedalVariant(index)}>
                  {index + 1}
                </Styled.RankMedal>
                <CompanySystemThumbnail companySystem={system} />
              </Styled.Link>
            </Link>
          </Styled.Item>
        ))}
    </Styled.List>
  )
}

export default CompanySystemRanking

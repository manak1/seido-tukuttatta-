import { useEffect, useState } from "react"

import DefaultLayout from "~/layouts/DefaultLayout"

import { CompanySystem } from "~/@types"
import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import { useGetCompanySystemList } from "~/hooks/api/companySystem"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const [list, setList] = useState<CompanySystem[]>([])

  const { get, isLoading } = useGetCompanySystemList()

  useEffect(() => {
    const init = async () => {
      const result = await get()
      if (result && result?.data) {
        setList(result.data)
      }
    }
    init()
  }, [])

  return (
    <DefaultLayout>
      {list &&
        list.map((system) => (
          <>
            <CompanySystemThumbnail companySystem={system} />
          </>
        ))}
    </DefaultLayout>
  )
}

export default Home

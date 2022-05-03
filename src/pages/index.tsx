import DefaultLayout from "~/layouts/DefaultLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"
import { useGetCompanySystem } from "~/hooks/api/companySystem"

import type { NextPage } from "next"

const Home: NextPage = () => {
  const { data } = useGetCompanySystem()

  return (
    <DefaultLayout>
      {data &&
        data.map((system) => (
          <>
            <CompanySystemThumbnail companySystem={system} />
          </>
        ))}
    </DefaultLayout>
  )
}

export default Home

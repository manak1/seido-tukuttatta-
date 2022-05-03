import DefaultLayout from "~/layouts/DefaultLayout"

import CompanySystemThumbnail from "~/components/model/companySystem/CompanySystemThumbnail"

import type { NextPage } from "next"

import { useGetCompanySystem } from "~/hooks/api/getCompanySystem"

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

import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <Spacer axis="vertical" size={24} />
    </DefaultLayout>
  )
}

export default Home

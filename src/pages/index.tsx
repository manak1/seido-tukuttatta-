import Spacer from "~/components/functional/Spacer"

import DefaultLayout from "~/layouts/DefaultLayout"

import HomeNew from "~/components/page/home/HomeNew"
import HomeRanking from "~/components/page/home/HomeRanking"
import HomeTop from "~/components/page/home/HomeTop"

import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomeTop />
      <Spacer axis="vertical" size={24} />
      <HomeNew />
      <Spacer axis="vertical" size={24} />
      <HomeRanking />
    </DefaultLayout>
  )
}

export default Home

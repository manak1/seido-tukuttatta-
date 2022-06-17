import { setResponse } from "~/libs/api"
import createHandler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

const handler = createHandler()

import { FETCH_PER_PAGE } from "~/constants/api"

handler.get("api/companySystem/ranking", async (req, res) => {
  const { page } = req.query
  try {
    const companySystems = await prisma.companySystem.findMany({
      take: FETCH_PER_PAGE,
      skip: Number(page) * FETCH_PER_PAGE,
      include: {
        _count: {
          select: { like: true },
        },
      },
      orderBy: {
        like: {
          _count: "desc",
        },
      },
    })

    const companySystemCount = await prisma.companySystem.count()
    setResponse.OK(res, { companySystems, count: companySystemCount })
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

export default handler

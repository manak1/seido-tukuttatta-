import { setResponse } from "~/libs/api"
import createHandler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

const handler = createHandler()

handler.get("api/companySystem/random", async (req, res) => {
  try {
    const count = await prisma.companySystem.count()
    const skip = Math.floor(Math.random() * (count - 3 >= 0 ? count - 3 : 0))
    const companySystems = await prisma.companySystem.findMany({
      take: 3,
      skip,
      orderBy: {
        createdAt: "desc",
      },
    })
    setResponse.OK(res, { companySystems })
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

export default handler

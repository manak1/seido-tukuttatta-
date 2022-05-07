import { setResponse } from "~/libs/api"
import createHandler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

const handler = createHandler()

handler.get("api/companySystem/:id", async (req, res) => {
  const { id } = req.query
  try {
    const companySystem = await prisma.companySystem.findFirst({
      where: {
        id: id as string,
      },
    })
    setResponse.OK(res, { companySystem })
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

export default handler

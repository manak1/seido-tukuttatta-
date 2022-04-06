import prisma from "~/libs/prisma"
import handler from "~/libs/next-connect"
import { validationMiddleware } from "~/middlewares/validation"
import { companySystemSchema } from "~/constants/schemas"
import { CompanySystem } from "@prisma/client"

handler.get(async (req, res) => {
  const companySystem = await prisma.companySystem.findMany()
  res.status(200).json({ data: companySystem })
})

handler
  .use(validationMiddleware(companySystemSchema))
  .post(async (req, res) => {
    const body = req.body as CompanySystem
    const result = await prisma.companySystem
      .create({
        data: {
          name: body.name,
          description: body.description,
          author: body.author,
        },
      })
      .catch((error) => {
        console.error(error)
        res
          .status(500)
          .json({
            message:
              "制度の作成に失敗しました。しばらく待ってからもう一度やりなおしてください。",
            success: false,
          })
      })
    res.status(200).json({ data: result })
  })

export default handler

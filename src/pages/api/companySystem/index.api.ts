import { PrismaClientValidationError } from "@prisma/client/runtime"

import { setResponse } from "~/libs/api"
import createHandler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

import { validationMiddleware } from "~/middlewares/validation"

import { CreateCompanySystem } from "~/@types/companySystem"

import { FETCH_PER_PAGE } from "~/constants/api"
import { createCompanySystemSchema } from "~/constants/schemas"

const handler = createHandler()

handler.get("api/companySystem", async (req, res) => {
  const { page } = req.query
  try {
    const companySystems = await prisma.companySystem.findMany({
      take: FETCH_PER_PAGE,
      skip: Number(page) * FETCH_PER_PAGE,
    })
    const count = await prisma.companySystem.count()
    setResponse.OK(res, { companySystems, count })
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

handler
  .use(validationMiddleware(createCompanySystemSchema))
  .post("api/companySystem", async (req, res) => {
    const { name, description, author } = req.body as CreateCompanySystem
    try {
      const result = await prisma.companySystem.create({
        data: {
          name,
          description,
          author: author ?? "名無さん",
        },
      })
      setResponse.Created(res, result)
    } catch (error) {
      if (error instanceof PrismaClientValidationError) {
        setResponse.BadRequest(res)
        return
      }
      setResponse.InternalServerError(
        res,
        "制度の作成に失敗しました。しばらく待ってからもう一度やりなおしてください。"
      )
    }
  })

export default handler

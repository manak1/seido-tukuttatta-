import { PrismaClientValidationError } from "@prisma/client/runtime"

import { setResponse } from "~/libs/api"
import handler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

import { validationMiddleware } from "~/middlewares/validation"

import { CreateCompanySystem } from "~/@types/companySystem"

import { createCompanySystemSchema } from "~/constants/schemas"

handler.get(async (req, res) => {
  const companySystem = await prisma.companySystem.findMany()
  setResponse.OK(res, companySystem)
})

handler
  .use(validationMiddleware(createCompanySystemSchema))
  .post(async (req, res) => {
    const { name, description, author, thumbnailType } =
      req.body as CreateCompanySystem
    try {
      const result = await prisma.companySystem.create({
        data: {
          name,
          description,
          author,
          thumbnailType,
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

import prisma from "~/libs/prisma"
import handler from "~/libs/next-connect"
import { validateBody } from "~/libs/ajv"
import { schemas } from "~/constants/schemas"
import { CompanySystem } from "@prisma/client"

handler.get(async (req, res) => {
  const companySystem = await prisma.companySystem.findMany()
  res.status(200).json({ data: companySystem })
})

handler.post(
  validateBody({
    type: "object",
    properties: {
      ...schemas.companySystem,
    },
    required: ["name", "description"],
    additionalProperties: false,
  }),
  async (req, res) => {
    const body = req.body as CompanySystem
    const result = await prisma.companySystem.create({
      data: {
        name: body.name,
        description: body.description,
        author: body.author,
      },
    })
    res.status(200).json({ data: result })
  }
)

export default handler

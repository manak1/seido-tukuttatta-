import Ajv from "ajv"
import { NextApiRequest, NextApiResponse } from "next"
import { NextHandler } from "next-connect"

export const validateBody = (schema: object) => {
  const ajv = Ajv()
  const validate = ajv.compile(schema)
  return (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    const isValid = validate(req.body)
    if (isValid) {
      return next()
    }
    const error = validate.errors?.[0]
    console.log(validate.errors)
    return res.status(400).json({
      error: error,
      message: "入力内容に不備があります。",
    })
  }
}

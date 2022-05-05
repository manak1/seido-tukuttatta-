import { NextApiRequest, NextApiResponse } from "next"
import { NextHandler } from "next-connect"

import { validateBody } from "~/libs/ajv"
import { setResponse } from "~/libs/api"

import { ApiErrorResponseType } from "~/@types/api/api"

export const validationMiddleware = (schema: object) => {
  const validate = validateBody(schema)
  return (
    req: NextApiRequest,
    res: NextApiResponse<ApiErrorResponseType>,
    next: NextHandler
  ) => {
    const isValid = validate(req.body)
    if (isValid) {
      return next()
    }
    setResponse.BadRequest(res, "入力内容に不備があります。")
  }
}

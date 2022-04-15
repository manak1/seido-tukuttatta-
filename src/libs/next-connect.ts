import { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"

import { setResponse } from "./api"

import { ApiErrorResponseType, ApiSuccessResponseType } from "~/@types/api"

const handler = nc<
  NextApiRequest,
  NextApiResponse<ApiSuccessResponseType<unknown> | ApiErrorResponseType>
>({
  onError(err, req, res) {
    setResponse.InternalServerError(res, err)
  },
  onNoMatch(req, res) {
    setResponse.NotFound(res)
  },
})

export default handler

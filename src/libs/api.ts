import { NextApiResponse } from "next"

import { ApiErrorResponseType, ApiSuccessResponseType } from "~/@types/api"

const OK = <T>(res: NextApiResponse<ApiSuccessResponseType<T>>, data: T) =>
  res.status(200).json({ ...data, success: true })

const Created = <T>(
  res: NextApiResponse<ApiSuccessResponseType<T>>,
  data: T
): void => {
  res.status(201).json({ ...data, success: true })
}

const BadRequest = (
  res: NextApiResponse<ApiErrorResponseType>,
  message = "無効なリクエストです"
): void => {
  res.status(404).json({ message, success: false })
}

const NotFound = (
  res: NextApiResponse<ApiErrorResponseType>,
  message = "エンドポイントが存在しません。"
): void => {
  res.status(404).json({ message, success: false })
}

const InternalServerError = (
  res: NextApiResponse<ApiErrorResponseType>,
  message: string
): void => {
  res.status(500).json({ message, success: false })
}

export const setResponse = {
  OK,
  Created,
  BadRequest,
  NotFound,
  InternalServerError,
}

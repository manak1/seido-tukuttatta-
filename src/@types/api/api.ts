export type ApiCommonResponseProperties = {
  success: boolean
}

export type ApiSuccessResponseType<T> = T & ApiCommonResponseProperties

export type ApiErrorResponseType = {
  message: string
} & ApiCommonResponseProperties

export type ApiResponseType<T> =
  | ApiSuccessResponseType<T>
  | ApiErrorResponseType

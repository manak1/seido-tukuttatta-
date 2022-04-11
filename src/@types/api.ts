type ApiCommonResponseProperties<T, U = undefined> = {
  success: T
  data: U
  message: string
}

export type ApiSuccessResponseType = Omit<
  ApiCommonResponseProperties<true>,
  "message"
>

export type ApiErrorResponseType = Omit<
  ApiCommonResponseProperties<false>,
  "data"
>

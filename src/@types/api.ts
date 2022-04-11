type ApiCommonResponseProperties<T, U> = {
  success: T
  data: U
  message: string
}

export type ApiSuccessResponseType<K> = Omit<
  ApiCommonResponseProperties<true, K>,
  "message"
>

export type ApiErrorResponseType = Omit<
  ApiCommonResponseProperties<false, never>,
  "data"
>

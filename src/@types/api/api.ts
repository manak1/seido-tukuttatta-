export type ApiCommonResponseProperties = {
  /**
   * API通信が成功したかどうか
   */
  success: boolean
}

export type ApiSuccessResponseType<T> = T & ApiCommonResponseProperties

export type ApiErrorResponseType = {
  /**
   * エラーメッセージ
   */
  message: string
} & ApiCommonResponseProperties

export type ApiResponseType<T> =
  | ApiSuccessResponseType<T>
  | ApiErrorResponseType

/** 制度 */
export type CompanySystem = {
  /**
   * id
   */
  id: number
  /**
   * 名前
   */
  name: string
  /**
   * 内容
   */
  description: string
  /**
   * サムネイルのタイプ
   */
  thumbnailType: string
  /**
   * 作者
   */
  author: string
  /**
   * 作成番号
   */
  number: number
}

export type CreateCompanySystem = Omit<
  CompanySystem,
  "id" | "author" | "number"
> & {
  author?: string
}

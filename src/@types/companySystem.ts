/** 制度 */
export type CompanySystem = {
  /**
   * id
   */
  id: string
  /**
   * 名前
   */
  name: string
  /**
   * 内容
   */
  description: string
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
  /**
   * 作者
   */
  author?: string
}

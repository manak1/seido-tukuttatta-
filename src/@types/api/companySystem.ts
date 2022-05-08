import { CompanySystem } from "../companySystem"
import { ApiSuccessResponseType } from "./api"

export type ApiSuccessGetCompanySystem = ApiSuccessResponseType<{
  /**
   * 制度
   */
  companySystem: CompanySystem
}>
export type ApiSuccessCreateCompanySystem = ApiSuccessGetCompanySystem
export type ApiSuccessGetCompanySystems = ApiSuccessResponseType<{
  /**
   * 制度一覧
   */
  companySystems: CompanySystem[]
  /**
   * 制度の最大数
   */
  count: number
}>

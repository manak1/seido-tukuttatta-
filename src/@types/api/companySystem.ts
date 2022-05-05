import { CompanySystem } from "../companySystem"
import { ApiSuccessResponseType } from "./api"

export type ApiSuccessGetCompanySystem = ApiSuccessResponseType<{
  companySystem: CompanySystem
}>
export type ApiSuccessGetCompanySystems = ApiSuccessResponseType<{
  companySystems: CompanySystem[]
}>

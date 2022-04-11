import { CompanySystem } from "~/@types/index"
import * as z from "zod"
import messages from "~/constants/validationMessage"
/*
 * 既存の型とZodSchemaの型の整合性をチェック可能にする関数
 */
export const schemaForType =
  <T>() =>
  <S extends z.ZodType<T, any, any>>(arg: S) => {
    return arg
  }

export const companySystemSchema = schemaForType<Omit<CompanySystem, "id">>()(
  z.object({
    name: z
      .string()
      .min(1, messages.required("制度名"))
      .max(100, messages.maxLength("制度名", 100)),
    author: z.string().optional(),
    thumbnailType: z.string(),
    description: z
      .string()
      .min(30, messages.minMaxLength("制度の概要", 30, 300))
      .max(300, messages.maxLength("制度の内容", 300)),
  })
)
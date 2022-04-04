import { JSONSchemaType } from "ajv"
import { CompanySystem } from "~/@types"

export const companySystemSchema: JSONSchemaType<Omit<CompanySystem, "id">> = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1, maxLength: 100 },
    description: { type: "string", minLength: 10, maxLength: 1000 },
    author: { type: "string", minLength: 1, maxLength: 100 },
  },
  required: ["name", "description"],
  additionalProperties: false,
}

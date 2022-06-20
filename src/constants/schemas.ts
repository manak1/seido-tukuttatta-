import { JSONSchemaType } from "ajv"

import { CreateCompanySystem } from "~/@types"

export const createCompanySystemSchema: JSONSchemaType<CreateCompanySystem> = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 1, maxLength: 100 },
    description: { type: "string", minLength: 20, maxLength: 1000 },
    author: { type: "string", minLength: 1, maxLength: 100, nullable: true },
  },
  required: ["name", "description"],
  additionalProperties: false,
}

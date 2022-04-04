import { CompanySystem } from "~/@types"

type Schema = {
  companySystem: {
    [k in keyof Omit<CompanySystem, "id">]: object
  }
}

export const schemas: Schema = {
  companySystem: {
    name: { type: "string", minLength: 1, maxLength: 100 },
    description: { type: "string", minLength: 10, maxLength: 1000 },
    author: { type: "string", minLength: 1, maxLength: 100 },
  },
}

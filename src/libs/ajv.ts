import Ajv from "ajv"

export const validateBody = (schema: object) => {
  const ajv = new Ajv()
  const validate = ajv.compile(schema)
  return validate
}

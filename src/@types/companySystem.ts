export type CompanySystem = {
  id: number
  name: string
  description: string
  thumbnailType: string
  author: string
}

export type CreateCompanySystem = Omit<CompanySystem, "id" | "author"> & {
  author?: string
}

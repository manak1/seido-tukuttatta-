import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import messages from "../src/constants/validationMessage"

const storyBookSchema = z.object({
  text: z.string().min(1, messages.required("入力")),
})

export const rfhProvider = (Story: any) => {
  const methods = useForm<{ text: string }>({
    mode: "onChange",
    resolver: zodResolver(storyBookSchema),
  })
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  )
}

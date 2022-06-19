import { format } from "date-fns"
export const formatDate = (date: string, dateFormat = "yyyy/MM/dd HH:mm") => {
  return format(new Date(date), dateFormat)
}

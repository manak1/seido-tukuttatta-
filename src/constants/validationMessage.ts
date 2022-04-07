export const messages = {
  required: (label: string) => `${label}を入力してください。`,
  minLength: (label: string, length: string | number) =>
    `${label}は${length}文字以上で入力してください。`,
  maxLength: (label: string, length: string | number) =>
    `${label}は${length}文字以下で入力してください。`,
  minMaxLength: (label: string, min: string | number, max: string | number) =>
    `${label}は${min}文字以上${max}文字以下で入力してください。`,
}
export default messages

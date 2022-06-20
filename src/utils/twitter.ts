const BASE_URL = "https://twitter.com/intent/tweet?related=@mikeanakida&text="

export const createdCompanySystemUrl = (name: string, url: string) => {
  return `${BASE_URL}${encodeURIComponent(
    `株式会社ねむぺんに新しい制度「${name}」が誕生したよ！!\r\n #制度作ったったー #${name} ${url}`
  )}`
}

export const shareCompanySystemUrl = (
  name: string,
  number: number,
  url: string
) => {
  return `${BASE_URL}${encodeURIComponent(
    `制度No${String(number).padStart(
      3,
      "0"
    )}「${name}」\r\n #制度作ったったー #${name} ${url}`
  )}`
}

export const createTwitterShareUrl = (name: string, url: string) => {
  return `${BASE_URL}${encodeURIComponent(
    `株式会社ねむぺんに新しい制度「${name}」が爆誕したよ！!\r\n #制度作ったったー #${name} ${url}`
  )}`
}

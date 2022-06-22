const BASE_URL = "https://twitter.com/intent/tweet?related=@mikeanakida&text="

export const createdCompanySystemUrl = (name: string, url: string) => {
  return `${BASE_URL}${encodeURIComponent(
    `株式会社ねむぺんに新しい制度「${name}」が爆誕したよ！!\r\n\r\n#制度作ったったー #${name}\r\n`
  )}&url=${url}`
}

export const shareCompanySystemUrl = (name: string, url: string) => {
  console.log(url)
  return `${BASE_URL}${encodeURIComponent(
    `\r\n#制度作ったったー #${name}\r\n`
  )}&url=${url}`
}

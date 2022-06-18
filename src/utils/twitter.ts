export const createTwitterShareUrl = (name: string, url: string) => {
  return `https://twitter.com/intent/tweet?related=@mikeanakida&text=${encodeURIComponent(
    `株式会社ねむぺんに新しい制度「${name}」が誕生したよ！!\r\n #制度作ったったー ${url}`
  )}`
}

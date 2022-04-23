export const preventEventByEnter = (e: React.KeyboardEvent) => {
  if (e.key === "Enter") e.preventDefault()
}

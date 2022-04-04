import { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"

const handler = nc<NextApiRequest, NextApiResponse>({
  onError(err, req, res) {
    console.log(err)
    res.status(500).json({ message: err })
  },
  onNoMatch(req, res) {
    res.status(404).json({ message: "エンドポイントが存在しません。" })
  },
})

export default handler

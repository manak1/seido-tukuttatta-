import { NextApiRequest, NextApiResponse } from "next"
import prisma from "~/libs/prisma"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return await createInquiry(req, res)
  }
  if (req.method === "GET") {
    return await getInquiry(req, res)
  }
}

async function createInquiry(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  if (!body) return
  const newEntry = await prisma.inquiry
    .create({
      data: {
        name: body.name ?? "",
        email: body.email ?? "",
        subject: body.subject ?? "",
        message: body.message ?? "",
      },
    })
    .catch((error) => {
      console.error(error)
      res
        .status(500)
        .json({ error: "質問の作成に失敗しました。", success: false })
    })
  return res.status(200).json({ data: newEntry, success: true })
}

async function getInquiry(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query
  const targetInquiry = await prisma.inquiry
    .findUnique({
      where: {
        id: parseInt(id as string),
      },
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error: `${id}の質問が見つかりませんでした。` })
    })
  if (targetInquiry) {
    res.status(200).json({ data: targetInquiry })
  }
}

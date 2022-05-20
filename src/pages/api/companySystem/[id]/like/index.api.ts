import requestIp from "request-ip"

import { setResponse } from "~/libs/api"
import createHandler from "~/libs/next-connect"
import prisma from "~/libs/prisma"

import { isString } from "~/utils/type"

const handler = createHandler()

handler.get("api/companySystem/:id/like", async (req, res) => {
  const { number } = req.query

  if (!isString(number)) {
    return setResponse.BadRequest(
      res,
      "いいねに失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }

  try {
    const target = await prisma.companySystem.findUnique({
      where: {
        number: Number(number),
      },
      include: {
        _count: {
          select: { like: true },
        },
      },
    })

    if (!target)
      return setResponse.BadRequest(res, "制度が存在しないようです。")

    const ip = requestIp.getClientIp(req) ?? "0"
    const liked = await prisma.like.findFirst({
      where: {
        companySystemId: target.number,
        ip,
      },
    })
    return setResponse.OK(res, { count: target._count.like, liked: !!liked })
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

handler.post("api/companySystem/:id/like", async (req, res) => {
  const { number } = req.body
  const ip = requestIp.getClientIp(req)
  if (!ip || !number) {
    setResponse.InternalServerError(
      res,
      "いいねに失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
    return
  }
  try {
    const likeExists = await prisma.like.findFirst({
      where: { ip },
    })

    if (likeExists) {
      const like = await prisma.like.delete({
        where: { id: likeExists.id },
      })

      setResponse.OK(res, { like })
    } else {
      const like = await prisma.like.create({
        data: {
          ip,
          companySystem: {
            connect: {
              number: Number(number),
            },
          },
        },
      })
      setResponse.OK(res, { like })
    }
  } catch (error) {
    setResponse.InternalServerError(
      res,
      "制度の取得に失敗しました。しばらく待ってからもう一度やりなおしてください。"
    )
  }
})

export default handler

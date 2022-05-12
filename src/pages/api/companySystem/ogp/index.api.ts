import fs from "fs"
import path from "path"

import {
  createCanvas,
  loadImage,
  CanvasRenderingContext2D,
  registerFont,
} from "canvas"

import createHandler from "~/libs/next-connect"

import { isString } from "~/utils/type"

const BASE_IMAGE_PATH = path.resolve("./public", "baseOGP.png")
const FALL_BACK_IMAGE = path.resolve("./public", "ogp.png")

const PADDING_X = 60
const PADDING_TOP = 80
const MAX_NAME_LINE_COUNT = 2
const CANVAS_WIDTH = 654
const CANVAS_HEIGHT = 356
const FONT_BLACK = path.resolve("./public", "fonts/NotoSansJP-Black.otf")
const FONT_MEDIUM = path.resolve("./public", "fonts/NotoSansJP-Medium.otf")
const FONT_REGULAR = path.resolve("./publicm", "fonts/NotoSansJP-Regular.otf")

const NAME_STYLE = {
  font: 'bold 40px "FONT_BLACK"',
  lineHeight: 50,
} as const

const DESCRIPTION_STYLE = {
  font: 'regular 24px "FONT_MEDIUM"',
  lineHeight: 42,
} as const

const AUTHOR_STYLE = {
  font: 'regular 20px "FONT_REGULAR"',
  lineHeight: 30,
}

const createOGP = async (ogpData: {
  name: string
  author: string
  description: string
}): Promise<Buffer> => {
  const { name, author, description } = ogpData
  registerFont(FONT_BLACK, { family: "FONT_BLACK" })
  registerFont(FONT_MEDIUM, { family: "FONT_MEDIUM" })
  registerFont(FONT_REGULAR, { family: "FONT_REGULAR" })
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  const ctx = canvas.getContext("2d")
  ctx.fillStyle = "#333"

  // 背景画像を描写
  await drawBackground(ctx)

  ctx.font = NAME_STYLE.font

  // 横幅に合わせて分割された制度名
  const nameLines = splitByMeasureWidth(name, CANVAS_WIDTH - PADDING_X * 2, ctx)
  // 制度名の行数(最大2)
  const nameLineCount = Math.min(nameLines.length, 2)
  // 制度名の高さ
  const nameHeight = nameLineCount * NAME_STYLE.lineHeight
  drawName(nameLines, ctx)

  ctx.font = DESCRIPTION_STYLE.font
  // 分割された概要分
  const descriptionLines = splitByMeasureWidth(
    description,
    CANVAS_WIDTH - PADDING_X * 2,
    ctx
  )
  // 概要分の行数 (制度名の行数が2の時は3行になる)
  const descriptionLineCount = nameLineCount === 2 ? 2 : 3
  drawDescription(descriptionLines, descriptionLineCount, nameHeight, ctx)

  ctx.font = AUTHOR_STYLE.font
  ctx.fillText(author, PADDING_X, CANVAS_HEIGHT - (PADDING_TOP - 15))

  return canvas.toBuffer()
}

async function drawBackground(ctx: CanvasRenderingContext2D) {
  const baseImage = await loadImage(BASE_IMAGE_PATH)
  ctx.drawImage(baseImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

function drawName(nameLines: string[], ctx: CanvasRenderingContext2D) {
  for (let i = 0; i < MAX_NAME_LINE_COUNT; i++) {
    const line = nameLines[i]
    if (!line) return
    ctx.fillText(line, PADDING_X, PADDING_TOP + NAME_STYLE.lineHeight * i)
  }
}

function drawDescription(
  descriptionLines: string[],
  descriptionLineCount: number,
  nameHeight: number,
  ctx: CanvasRenderingContext2D
) {
  for (let i = 0; i < descriptionLineCount; i++) {
    const line = descriptionLines[i]
    if (!line) return
    ctx.fillText(
      line,
      PADDING_X,
      PADDING_TOP + nameHeight + 10 + DESCRIPTION_STYLE.lineHeight * i
    )
  }
}

function splitByMeasureWidth(
  str: string,
  maxWidth: number,
  context: CanvasRenderingContext2D
) {
  const chars = Array.from(str)
  let line = ""
  const lines = []
  for (let index = 0; index < chars.length; index++) {
    if (maxWidth <= context.measureText(line + chars[index]).width) {
      lines.push(line)
      line = chars[index]
    } else {
      line += chars[index]
    }
  }
  lines.push(line)
  return lines
}
const handler = createHandler()

handler.get("api/companySystem/ogp", async (req, res) => {
  const { name, description, author } = req.query
  if (isString(name) && isString(description) && isString(author)) {
    const buffer = await createOGP({ name, author, description })
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": buffer.length,
    })
    res.end(buffer, "binary")
  } else {
    const buffer = fs.readFileSync(FALL_BACK_IMAGE)
    res.writeHead(200, {
      "Content-Type": "image/png",
      "Content-Length": buffer.length,
    })
    res.end(buffer, "binary")
  }
})

export default handler

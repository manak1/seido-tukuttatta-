import prisma from "~/libs/prisma";
import handler from "~/libs/next-connect";
import { validationMiddleware } from "~/middlewares/validation";
import { companySystemSchema } from "~/constants/schemas";
import { CompanySystem } from "@prisma/client";
import { setResponse } from "~/libs/api";
import { PrismaClientValidationError } from "@prisma/client/runtime";

handler.get(async (req, res) => {
  const companySystem = await prisma.companySystem.findMany();
  setResponse.OK(res, companySystem);
});

handler
  .use(validationMiddleware(companySystemSchema))
  .post(async (req, res) => {
    const body = req.body as CompanySystem;
    try {
      const result = await prisma.companySystem.create({
        data: {
          name: body.name,
          description: body.description,
          author: body.author,
        },
      });
      setResponse.Created(res, result);
    } catch (error) {
      console.error(error);
      if (error instanceof PrismaClientValidationError) {
        setResponse.BadRequest(res);
        return;
      }
      setResponse.InternalServerError(
        res,
        "制度の作成に失敗しました。しばらく待ってからもう一度やりなおしてください。"
      );
    }
  });

export default handler;

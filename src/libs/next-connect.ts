import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { ApiErrorResponseType, ApiSuccessResponseType } from "~/@types/api";
import { setResponse } from "./api";

const handler = nc<
  NextApiRequest,
  NextApiResponse<ApiSuccessResponseType | ApiErrorResponseType>
>({
  onError(err, req, res) {
    console.log(err);
    setResponse.InternalServerError(res, err);
  },
  onNoMatch(req, res) {
    setResponse.NotFound(res);
  },
});

export default handler;

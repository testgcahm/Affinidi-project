import { use } from "next-api-middleware";
import type { NextApiRequest, NextApiResponse } from "next";
import { UserInfo } from "src/utils/affinidi/types/types";
import { auth } from "src/utils/affinidi/auth/auth";
import { allowedHttpMethods } from "src/utils/affinidi/middlewares/allowed-http-methods";
import { errorHandler } from "src/utils/affinidi/middlewares/error-handler";

type HandlerResponse = {
  userId: string;
  user?: UserInfo;
};

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>
) {
  const { userId, user } = await auth(req, res);

  res.status(200).json({ userId, user });
}

export default use(allowedHttpMethods("GET"), errorHandler)(handler);

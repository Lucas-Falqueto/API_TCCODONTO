import * as jwt from "jsonwebtoken";
import { promisify } from "util";

export const validate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  const [, token] = authorization.split(" ");

  try {
    await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    return next();
  } catch (err) {
    return res.sendStatus(401);
  }
};

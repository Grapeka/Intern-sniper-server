import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import { UserManager } from "../services/UserManager";
import { CustomRequest, tokenizeUser } from "../controllers/authController";

dotenv.config();

const ACCESS_TOKEN: Secret = process.env.ACCESS_TOKEN ?? "";
const userManager = new UserManager()

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  const payload = jwt.verify(token, ACCESS_TOKEN);
  const { email } = payload as tokenizeUser;
  const user = await userManager.getUserByEmail(email);
  if (user === null) return res.sendStatus(403);
  (req as CustomRequest).user = user;

  next();
}

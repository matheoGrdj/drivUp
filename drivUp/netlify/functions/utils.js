import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.JWT_SECRET || "secret_dev";

export default function verifyToken(event) {
  const authHeader = event.headers.authorization;
  if (!authHeader) throw new Error("Token manquant");

  const token = authHeader.split(" ")[1];
  return jwt.verify(token, SECRET_KEY);
}

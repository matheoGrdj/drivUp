import { neon } from "@neondatabase/serverless";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret_dev"; // mettre un secret fort en prod

export async function handler(event) {
  if (!["POST"].includes(event.httpMethod)) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }
  const sql = neon(process.env.DATABASE_URL || "");
  const { login, password } = JSON.parse(event.body);

  try {
    const users = await sql`SELECT * FROM "User" WHERE login = ${login}`;
    if (users.length === 0) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Utilisateur non trouvé" }),
      };
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Mot de passe incorrect" }),
      };
    }

    // Génération d’un token JWT
    const token = jwt.sign({ uuid: user.uuid, login: user.login }, SECRET_KEY, {
      expiresIn: "1h",
    });

    return { statusCode: 200, body: JSON.stringify({ token }) };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur serveur" }),
    };
  }
}

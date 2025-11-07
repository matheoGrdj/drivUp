import { neon } from "@neondatabase/serverless";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";

export async function handler(event) {
  const sql = neon(process.env.DATABASE_URL || "");

  try {
    const body = JSON.parse(event.body);
    const { login, password } = body;

    if (!login || !password) {
      throw new Error("Champs manquants : login ou password");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const uuid = uuidv4();

    const result = await sql`
      INSERT INTO "User" (uuid, login, password)
      VALUES (${uuid}, ${login}, ${hashedPassword})
      RETURNING *
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, user: result[0] }),
    };
  } catch (error) {
    console.error("Erreur SQL :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erreur lors de l’ajout de l’utilisateur",
      }),
    };
  }
}

import { neon } from "@neondatabase/serverless";
import verifyToken from "./utils";

export async function handler(event) {
  if (!["GET"].includes(event.httpMethod)) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }
  const sql = neon(process.env.DATABASE_URL || "");

  try {
    const decoded = verifyToken(event);
    const data = await sql`SELECT * FROM inscrit`;
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Erreur SQL :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erreur lors de la récupération des inscrits",
      }),
    };
  }
}

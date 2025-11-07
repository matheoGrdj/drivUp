import { neon } from "@neondatabase/serverless";
import verifyToken from "./utils";

export async function handler(event) {
  if (!["DELETE"].includes(event.httpMethod)) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }

  const sql = neon(process.env.DATABASE_URL || "");

  try {
    // const decoded = verifyToken(event);

    let id = event.queryStringParameters?.id;
    if (!id && event.body) {
      try {
        const parsed = JSON.parse(event.body);
        id = parsed?.id;
      } catch {
        // ignore parse error, handled below if id missing
      }
    }

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Paramètre id manquant" }),
      };
    }

    const numericId = Number(id);
    if (!Number.isInteger(numericId)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Paramètre id invalide" }),
      };
    }

    const result =
      await sql`DELETE FROM "inscrit" WHERE id = ${numericId} RETURNING *`;
    if (result.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Inscrit introuvable" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, deleted: result[0] }),
    };
  } catch (error) {
    console.error("Erreur suppression inscrit :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erreur lors de la suppression de l’inscrit",
      }),
    };
  }
}

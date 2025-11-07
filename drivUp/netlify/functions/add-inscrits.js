import { neon } from "@neondatabase/serverless";
import verifyToken from "./utils";

export async function handler(event) {
  if (!["POST"].includes(event.httpMethod)) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }
  const sql = neon(process.env.DATABASE_URL || "");

  try {
    const decoded = verifyToken(event);
    const body = JSON.parse(event.body);
    const { nom, prenom, mail, telephone } = body;

    if (!nom || !prenom || !mail || !telephone) {
      throw new Error("Champs manquants : nom, prenom, mail ou telephone");
    }

    const result = await sql`
      INSERT INTO "inscrit" (nom, prenom, mail, telephone)
      VALUES (${nom}, ${prenom}, ${mail}, ${telephone})
      RETURNING *
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, inscrit: result[0] }),
    };
  } catch (error) {
    console.error("Erreur SQL :", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erreur lors de l’ajout de l’inscrit" }),
    };
  }
}

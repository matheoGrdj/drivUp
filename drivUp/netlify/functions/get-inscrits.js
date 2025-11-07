import { neon } from "@neondatabase/serverless";

export async function handler() {
  const sql = neon(process.env.DATABASE_URL || "");

  try {
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

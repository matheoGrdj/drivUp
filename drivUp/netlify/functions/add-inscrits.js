import { neon } from "@neondatabase/serverless";

function isEmail(v) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function isTelephone(v) {
  if (typeof v !== "string") return false;
  const digits = v.replace(/[\s+.()-]/g, "");
  return /^[0-9]{10,15}$/.test(digits);
}
function isName(v) {
  return (
    typeof v === "string" &&
    v.trim().length >= 2 &&
    v.trim().length <= 100 &&
    /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/.test(v.trim())
  );
}

export async function handler(event) {
  if (!["POST"].includes(event.httpMethod)) {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Méthode non autorisée" }),
    };
  }
  const sql = neon(process.env.DATABASE_URL || "");

  // Validation parsing
  let bodyData;
  try {
    bodyData = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "JSON invalide" }),
    };
  }

  const { nom, prenom, mail, telephone } = bodyData || {};

  // Presence check
  if (!nom || !prenom || !mail || !telephone) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Champs manquants : nom, prenom, mail ou telephone",
      }),
    };
  }

  // Type & format checks
  if (!isName(nom) || !isName(prenom)) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error:
          "Nom/prenom invalides (2-100 caractères, lettres / espaces / apostrophes / tirets)",
      }),
    };
  }

  if (!isEmail(mail)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Email invalide" }),
    };
  }

  if (!isTelephone(telephone)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Téléphone invalide (10-15 chiffres)" }),
    };
  }

  // Normalisations
  const cleanNom = nom.trim();
  const cleanPrenom = prenom.trim();
  const cleanMail = mail.trim().toLowerCase();
  const cleanTelephone = telephone.replace(/[\s+.()-]/g, "");

  try {
    // Unicité email
    const exists =
      await sql`SELECT 1 FROM "inscrit" WHERE mail = ${cleanMail} LIMIT 1`;
    if (exists.length) {
      return {
        statusCode: 409,
        body: JSON.stringify({ error: "Email déjà enregistré" }),
      };
    }

    const result = await sql`
      INSERT INTO "inscrit" (nom, prenom, mail, telephone)
      VALUES (${cleanNom}, ${cleanPrenom}, ${cleanMail}, ${cleanTelephone})
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

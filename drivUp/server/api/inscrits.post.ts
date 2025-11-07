import { neon } from "@neondatabase/serverless"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const sql = neon(config.DATABASE_URL || "")

    try {
        const body = await readBody(event)
        const { nom, prenom, mail, telephone } = body

        if (!nom || !prenom || !mail || !telephone) {
            throw new Error("Champs manquants : nom, prenom, mail ou telephone")
        }

        if (typeof telephone !== 'string' || !/^\+?[0-9\s\-()]+$/.test(telephone)) {
            throw new Error("Format de téléphone invalide")
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            throw new Error("Format d'email invalide")
        }

        if (typeof nom !== 'string' || typeof prenom !== 'string') {
            throw new Error("Nom et prénom doivent être des chaînes de caractères")
        }

        const result = await sql`
          INSERT INTO "inscrit" (nom, prenom, mail, telephone)
          VALUES (${nom}, ${prenom}, ${mail}, ${telephone})
          RETURNING *
        `

        // 🔹 Retourner l’inscrit ajouté
        return { success: true, inscrit: result[0] }

    } catch (error) {
        console.error("Erreur SQL :", error)
        return { error: "Erreur lors de l’ajout de l’inscrit" }
    }
})

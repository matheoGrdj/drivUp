import { neon } from "@neondatabase/serverless"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const sql = neon(config.DATABASE_URL || "")

    try {
        const body = await readBody(event)
        const { login, password } = body

        if (!login || !password) {
            throw new Error("Champs manquants :login ou password")
        }

        if (typeof login !== 'string' || typeof password !== 'string') {
            throw new Error("Login et mot de passe doivent être des chaînes de caractères")
        }

        // on hash le mot de passe avant de le stocker (optionnel mais recommandé)
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const uuid = uuidv4();

        const result = await sql`
          INSERT INTO "User" (uuid, login, password)
          VALUES (${uuid}, ${login}, ${hashedPassword})
          RETURNING *
        `

        // 🔹 Retourner l’utilisateur ajouté
        return { success: true, user: result[0] }

    } catch (error) {
        console.error("Erreur SQL :", error)
        return { error: "Erreur lors de l’ajout de l’utilisateur" }
    }
})

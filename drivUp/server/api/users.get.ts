import { neon } from "@neondatabase/serverless"

export default defineEventHandler(async () => {
    const config = useRuntimeConfig()
    const sql = neon(config.DATABASE_URL || "")

    try {
        const data = await sql`SELECT * FROM "User"`
        return data
    } catch (error) {
        console.error("Erreur SQL :", error)
        return { error: "Erreur lors de la récupération des utilisateurs" }
    }
})

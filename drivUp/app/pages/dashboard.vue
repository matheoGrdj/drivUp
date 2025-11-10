<template>
    <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 py-26 px-6">
        <div
            class="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-10">
            <!-- En-tête -->
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">Tableau de bord des inscrits</h1>
                    <p class="text-gray-600">Visualisez la liste complète des élèves inscrits.</p>
                </div>
            </div>

            <!-- Tableau -->
            <div class="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-purple-100/60">
                        <tr>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nom</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Prénom</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Email</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Téléphone</th>
                            <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Suppression</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-100">
                        <tr v-for="inscrit in inscrits" :key="inscrit.id" class="hover:bg-purple-50/40 transition-all">
                            <td class="px-6 py-4 text-gray-900 font-medium">{{ inscrit.nom }}</td>
                            <td class="px-6 py-4 text-gray-900">{{ inscrit.prenom }}</td>
                            <td class="px-6 py-4 text-gray-700">{{ inscrit.mail }}</td>
                            <td class="px-6 py-4 text-gray-700">{{ inscrit.telephone }}</td>
                            <td class="px-6 py-4">
                                <button
                                    class="bg-red-600 text-white px-4 py-2 rounded-lg shadow cursor-pointer hover:bg-red-700 transition-all active:scale-95"
                                    @click="deleteInscrit(inscrit.id)">
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <!-- Message vide -->
            <div v-if="inscrits.length === 0 && !loading" class="text-center py-10 text-gray-500">
                Aucun inscrit trouvé.
            </div>

            <!-- Loader -->
            <div v-if="loading" class="text-center py-10 text-purple-600 font-semibold">Chargement...</div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const inscrits = ref([])
const loading = ref(true)
const authToken = ref(null)

const fetchInscrits = async () => {
    if (!authToken.value) return
    try {
        const res = await fetch('/.netlify/functions/get-inscrits', {
            headers: { 'Authorization': `Bearer ${authToken.value}` }
        })
        if (!res.ok) throw new Error('Erreur serveur')
        inscrits.value = await res.json()
    } catch (err) {
        console.error('Erreur :', err)
    } finally {
        loading.value = false
    }
}

const deleteInscrit = async (id) => {
    if (!authToken.value) return
    try {
        const res = await fetch('/.netlify/functions/delete-inscrits', {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${authToken.value}` },
            body: JSON.stringify({ id })
        })
        if (!res.ok) throw new Error('Erreur suppression')
        inscrits.value = inscrits.value.filter(i => i.id !== id)
    } catch (err) {
        console.error('Erreur :', err)
    }
}

onMounted(() => {
    authToken.value = localStorage.getItem('authToken')
    if (!authToken.value) {
        navigateTo('/') // ou window.location.href = '/'
        return
    }
    fetchInscrits()
})
</script>

<style scoped></style>

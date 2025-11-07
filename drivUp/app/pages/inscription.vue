<template>
    <div class="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
        <!-- ====== Bannière / Introduction ====== -->
        <section class="relative py-28 px-6 text-center">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Inscription
                </h1>
                <p class="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
                    <span class="vl-brand font-bold">Driv’Up</span> est votre auto-école moderne et
                    sérieuse à Cronenbourg, qui accompagne chaque élève vers la réussite.
                </p>
            </div>
        </section>

        <!-- ====== Formulaire d'inscription ====== -->
        <section class="py-20 px-6">
            <div class="max-w-3xl mx-auto">
                <div
                    class="bg-white shadow-xl border border-gray-200 rounded-2xl p-10 transition hover:shadow-2xl duration-300">
                    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Formulaire d'inscription
                    </h2>

                    <form @submit.prevent="handleSubmit" class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="nom" class="block text-sm font-medium text-gray-700">Nom</label>
                                <input type="text" id="nom" v-model="form.nom" required
                                    class="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label for="prenom" class="block text-sm font-medium text-gray-700">Prénom</label>
                                <input type="text" id="prenom" v-model="form.prenom" required
                                    class="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div>
                                <label for="mail" class="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="mail" v-model="form.mail" required
                                    class="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                            <div>
                                <label for="telephone" class="block text-sm font-medium text-gray-700">Téléphone
                                    (0XXXXXXXXX)</label>
                                <input type="tel" id="telephone" v-model="form.telephone" required
                                    class="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition" />
                            </div>
                        </div>

                        <div class="text-center">
                            <a href="/connexion" class="text-purple-700 font-medium hover:text-purple-900 underline">
                                Connectez-vous ici.
                            </a>
                        </div>

                        <div class="">
                            <button type="submit"
                                class="w-full bg-purple-600 text-white rounded-lg py-3 font-semibold hover:bg-purple-700 active:scale-[0.98] transition-all shadow-md">
                                S'inscrire
                            </button>
                        </div>
                    </form>

                    <transition name="fade">
                        <div v-if="successMessage"
                            class="mt-6 p-4 bg-green-100 text-green-700 border border-green-200 rounded-lg text-center">
                            ✅ {{ successMessage }} <br />
                            Nous vous recontacterons bientôt pour finaliser votre inscription !
                        </div>
                    </transition>

                    <transition name="fade">
                        <div v-if="errorMessage"
                            class="mt-6 p-4 bg-red-100 text-red-700 border border-red-200 rounded-lg text-center">
                            ⚠️ {{ errorMessage }} <br />
                            Il se peut que le format de l'email ou du téléphone soit incorrect.
                        </div>
                    </transition>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    nom: '',
    prenom: '',
    mail: '',
    telephone: ''
})

const successMessage = ref('')
const errorMessage = ref('')

const handleSubmit = async () => {
    try {
        const response = await fetch('/.netlify/functions/add-inscrits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.value)
        })

        if (!response.ok) {
            throw new Error("Erreur lors de l'inscription")
        }

        await response.json()
        successMessage.value = 'Inscription réussie !'
        errorMessage.value = ''
        form.value = { nom: '', prenom: '', mail: '', telephone: '' }
    } catch (error) {
        errorMessage.value = "Erreur lors de l'inscription. Veuillez réessayer."
        successMessage.value = ''
        console.error('Erreur:', error)
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

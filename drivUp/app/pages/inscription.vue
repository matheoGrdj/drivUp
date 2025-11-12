<template>
    <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">

        <section class="relative py-20 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

            <div class="max-w-4xl mx-auto">
                <div
                    class="bg-white/80 backdrop-blur-sm shadow-2xl border border-gray-100 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all hover:shadow-3xl duration-300">

                    <!-- En-tête -->
                    <div class="text-center mb-8 sm:mb-10">
                        <div class="inline-block p-3 bg-purple-100 rounded-2xl mb-4">
                            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                        </div>
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Formulaire d'inscription
                        </h2>
                        <p class="text-sm sm:text-base text-gray-600">
                            Remplissez les informations ci-dessous pour créer votre compte
                        </p>
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
                        <!-- Ligne 1: Nom et Prénom -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div class="space-y-2">
                                <label for="nom" class="block text-sm font-semibold text-gray-700">
                                    Nom <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="nom" v-model="form.nom" required
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="Dupont" />
                            </div>
                            <div class="space-y-2">
                                <label for="prenom" class="block text-sm font-semibold text-gray-700">
                                    Prénom <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="prenom" v-model="form.prenom" required
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="Jean" />
                            </div>
                        </div>

                        <!-- Ligne 2: Email et Téléphone -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div class="space-y-2">
                                <label for="mail" class="block text-sm font-semibold text-gray-700">
                                    Email <span class="text-red-500">*</span>
                                </label>
                                <input type="email" id="mail" v-model="form.mail" required
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="jean.dupont@email.com" />
                            </div>
                            <div class="space-y-2">
                                <label for="telephone" class="block text-sm font-semibold text-gray-700">
                                    Téléphone <span class="text-red-500">*</span>
                                </label>
                                <input type="tel" id="telephone" v-model="form.telephone" required pattern="0[0-9]{9}"
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="0612345678" />
                            </div>
                        </div>

                        <!-- Lien de connexion -->
                        <div class="text-center py-2">
                            <NuxtLink to="/connexion"
                                class="text-purple-600 font-semibold hover:text-purple-800 underline decoration-2 underline-offset-2 transition-colors">
                                Connectez-vous ici
                            </NuxtLink>
                        </div>

                        <!-- Bouton de soumission -->
                        <div class="pt-2">
                            <button type="submit"
                                class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl py-3.5 sm:py-4 cursor-pointer text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-purple-800 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl">
                                S'inscrire maintenant
                            </button>
                        </div>
                    </form>

                    <!-- Messages de succès/erreur -->
                    <Transition name="fade">
                        <div v-if="successMessage"
                            class="mt-6 p-4 sm:p-5 bg-green-50 text-green-800 border-2 border-green-200 rounded-xl text-center">
                            <div class="flex items-center justify-center gap-2 mb-2">
                                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="font-semibold text-base sm:text-lg">{{ successMessage }}</span>
                            </div>
                            <p class="text-sm sm:text-base">
                                Nous vous recontacterons bientôt pour finaliser votre inscription !
                            </p>
                        </div>
                    </Transition>

                    <Transition name="fade">
                        <div v-if="errorMessage"
                            class="mt-6 p-4 sm:p-5 bg-red-50 text-red-800 border-2 border-red-200 rounded-xl text-center">
                            <div class="flex items-center justify-center gap-2 mb-2">
                                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span class="font-semibold text-base sm:text-lg">{{ errorMessage }}</span>
                            </div>
                            <p class="text-sm sm:text-base">
                                Il se peut que le format de l'email ou du téléphone soit incorrect.
                            </p>
                        </div>
                    </Transition>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
    title: "Inscription",
    meta: [
        {
            name: "description",
            content: "Inscrivez-vous chez Driv'Up en quelques minutes. Remplissez notre formulaire pour commencer votre formation à la conduite.",
        },
        {
            name: "keywords",
            content: "inscription auto-école, formulaire inscription, permis conduite, Strasbourg",
        },
        {
            property: "og:title",
            content: "S'inscrire chez Driv'Up | Formation Permis",
        },
        {
            property: "og:description",
            content: "Rejoignez Driv'Up et commencez votre formation au permis de conduire dès aujourd'hui.",
        },
    ],
})

const form = ref({
    nom: '',
    prenom: '',
    mail: '',
    telephone: ''
})

const successMessage = ref('')
const errorMessage = ref('')

const stripTags = (s) => (s || '').replace(/<[^>]*>?/gm, '')
const removeCtrl = (s) => (s || '').replace(/[\u0000-\u001F\u007F]/g, '')
const collapseSpaces = (s) => (s || '').replace(/\s+/g, ' ').trim()

const sanitizeName = (s) =>
    collapseSpaces(
        stripTags(
            removeCtrl(String(s))
        )
    )
        .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, '')
        .slice(0, 100)

const sanitizeEmail = (s) =>
    collapseSpaces(
        stripTags(
            removeCtrl(String(s))
        )
    )
        .toLowerCase()
        .slice(0, 254)

const sanitizeTelephone = (s) =>
    stripTags(removeCtrl(String(s)))
        .replace(/[\s+.()-]/g, '')
        .replace(/[^0-9]/g, '')
        .slice(0, 15)

const isValidName = (v) => /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,100}$/.test(v || '')
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v || '')
const isValidTelephone = (v) => /^[0-9]{10,15}$/.test(v || '')

const handleSubmit = async () => {
    errorMessage.value = ''
    successMessage.value = ''

    // Sanitarisation
    const nom = sanitizeName(form.value.nom)
    const prenom = sanitizeName(form.value.prenom)
    const mail = sanitizeEmail(form.value.mail)
    const telephone = sanitizeTelephone(form.value.telephone)

    // Validation
    if (!nom || !prenom || !mail || !telephone) {
        errorMessage.value = "Champs requis manquants."
        return
    }
    if (!isValidName(nom) || !isValidName(prenom)) {
        errorMessage.value = "Nom / prénom invalides."
        return
    }
    if (!isValidEmail(mail)) {
        errorMessage.value = "Email invalide."
        return
    }
    if (!isValidTelephone(telephone)) {
        errorMessage.value = "Téléphone invalide."
        return
    }

    // Réinjecter valeurs nettoyées
    form.value = { nom, prenom, mail, telephone }

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

        setTimeout(() => {
            successMessage.value = ''
        }, 5000)
    } catch (error) {
        errorMessage.value = "Erreur lors de l'inscription. Veuillez réessayer."
        successMessage.value = ''
        console.error('Erreur:', error)

        setTimeout(() => {
            errorMessage.value = ''
        }, 5000)
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

.animation-delay-2000 {
    animation-delay: 2s;
}
</style>

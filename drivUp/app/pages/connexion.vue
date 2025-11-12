<template>
    <div class="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50">

        <section class="relative py-20 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

            <div class="max-w-4xl mx-auto">
                <div
                    class="bg-white/80 backdrop-blur-sm shadow-2xl border border-gray-100 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all hover:shadow-3xl duration-300">

                    <!-- En-tête -->
                    <div class="text-center mb-8 sm:mb-10">
                        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Formulaire de connexion
                        </h2>
                        <p class="text-sm sm:text-base text-gray-600">
                            Remplissez les informations ci-dessous pour vous connecter au compte
                        </p>
                    </div>

                    <form @submit.prevent="handleSubmit" class="space-y-5 sm:space-y-6">
                        <!-- Ligne 1: Login -->
                        <div class="gap-4 sm:gap-6">
                            <div class="space-y-2">
                                <label for="login" class="block text-sm font-semibold text-gray-700">
                                    Login <span class="text-red-500">*</span>
                                </label>
                                <input type="text" id="login" v-model="form.login" required
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="Dupont" />
                            </div>
                        </div>

                        <!-- Ligne 2: Mot de passe -->
                        <div class="gap-4 sm:gap-6">
                            <div class="space-y-2">
                                <label for="password" class="block text-sm font-semibold text-gray-700">
                                    Mot de passe <span class="text-red-500">*</span>
                                </label>
                                <input type="password" id="password" v-model="form.password" required
                                    class="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-base"
                                    placeholder="••••••••" />
                            </div>
                        </div>

                        <!-- Bouton de soumission -->
                        <div class="pt-2">
                            <button type="submit"
                                class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl py-3.5 sm:py-4 cursor-pointer text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-purple-800 active:scale-[0.98] transition-all shadow-lg hover:shadow-xl">
                                Se connecter
                            </button>
                        </div>
                    </form>

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
                                Veuillez vérifier vos informations de connexion et réessayer.
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
    title: "Connexion",
    meta: [
        {
            name: "description",
            content: "Connectez-vous à votre compte Driv'Up pour accéder à votre tableau de bord et suivre votre progression.",
        },
        {
            name: "keywords",
            content: "connexion, login, compte, tableau de bord, suivi formation",
        },
        {
            property: "og:title",
            content: "Connexion | Driv'Up",
        },
        {
            property: "og:description",
            content: "Accédez à votre compte Driv'Up pour suivre votre formation.",
        },
    ],
})

const form = ref({
    login: '',
    password: ''
})

const errorMessage = ref('')

const stripTags = (s) => (s ?? '').replace(/<[^>]*>?/g, '')
const removeCtrls = (s) => (s ?? '').replace(/[\u0000-\u001F\u007F]/g, '')
const sanitizeLogin = (s) =>
    removeCtrls(stripTags(String(s)))
        .normalize('NFKC')
        .replace(/[^A-Za-z0-9._-]/g, '')
        .slice(0, 64)

const sanitizePassword = (s) =>
    removeCtrls(String(s))
        .normalize('NFKC')
        .trim()
        .slice(0, 128)

const isValidLogin = (s) => /^[A-Za-z0-9._-]{3,64}$/.test(s)
const isValidPassword = (s) => typeof s === 'string' && s.length >= 6 && s.length <= 128


const handleSubmit = async () => {
    const login = sanitizeLogin(form.value.login)
    const password = sanitizePassword(form.value.password)

    // validate after sanitization
    if (!isValidLogin(login)) {
        errorMessage.value = "Login invalide (3-64 caractères: lettres, chiffres, . _ -)."
        return
    }
    if (!isValidPassword(password)) {
        errorMessage.value = "Mot de passe invalide (min 6 caractères)."
        return
    }

    try {
        const response = await fetch('/.netlify/functions/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form.value)
        })

        if (!response.ok) {
            throw new Error("Erreur lors de la connexion")
        }

        const data = await response.json()
        console.log('Token reçu :', data.token)
        localStorage.setItem('authToken', data.token)
        errorMessage.value = ''
        form.value = { login: '', password: '' }
        window.location.href = '/dashboard';
    } catch (error) {
        errorMessage.value = "Erreur lors de la connexion. Veuillez réessayer."
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

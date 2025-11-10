<template>
    <div class="relative overflow-hidden bg-violet-lum min-h-screen">
        <!-- ====== Bannière ====== -->
        <section class="relative py-24 text-center bg-violet-lum">
            <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Contactez <span class="vl-brand">Driv’Up</span>
            </h1>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto">
                Une question sur nos formations ? Besoin d’un devis ? Nous sommes à votre écoute.
            </p>
        </section>

        <!-- ====== Formulaire de contact ====== -->
        <section class="bg-gradient-to-b from-white to-green-light/40 py-16 px-6">
            <div
                class="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-10">
                <h2 class="text-3xl font-bold text-center text-green-main mb-8">
                    Envoyez-nous un message
                </h2>

                <form @submit.prevent="sendEmail" class="space-y-6" autocomplete="on">
                    <!-- Honeypot anti-bot (caché) -->
                    <input v-model="honeypot" type="text" tabindex="-1" autocomplete="off" class="hidden"
                        aria-hidden="true" />

                    <!-- Nom -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Nom</label>
                        <input v-model.trim="form.nom" type="text" inputmode="text" autocomplete="family-name" required
                            minlength="2" maxlength="80" pattern="[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,80}"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Votre nom" />
                    </div>

                    <!-- Prénom -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Prénom</label>
                        <input v-model.trim="form.prenom" type="text" inputmode="text" autocomplete="given-name"
                            required minlength="2" maxlength="80" pattern="[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,80}"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="Votre prénom" />
                    </div>

                    <!-- Email -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Email</label>
                        <input v-model.trim="form.email" type="email" inputmode="email" autocomplete="email" required
                            maxlength="254"
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="votre@email.com" />
                    </div>

                    <!-- Message -->
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Message</label>
                        <textarea v-model.trim="form.message" rows="5" required minlength="10" maxlength="2000"
                            placeholder="Votre message..."
                            class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"></textarea>
                    </div>

                    <!-- Bouton -->
                    <div class="text-center">
                        <button type="submit"
                            class="cursor-pointer bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-3 px-8 rounded-xl shadow-lg hover:from-purple-700 hover:to-purple-500 transition-all">
                            Envoyer
                        </button>
                    </div>

                    <!-- Message de succès / erreur -->
                    <p v-if="successMessage" class="text-green-600 text-center mt-4 font-semibold">
                        {{ successMessage }}
                    </p>
                    <p v-if="errorMessage" class="text-red-600 text-center mt-4 font-semibold">
                        {{ errorMessage }}
                    </p>
                </form>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com";

// ...existing code...
const form = ref({
    nom: "",
    prenom: "",
    email: "",
    message: "",
});

const honeypot = ref("");

const successMessage = ref("");
const errorMessage = ref("");

const stripTags = (s) => (s || "").replace(/<[^>]*>?/gm, "");
const sanitize = (s) =>
    stripTags(s)
        .replace(/[\u0000-\u001F\u007F]/g, "")
        .replace(/\s+/g, " ")
        .trim();

const isValidName = (v) => /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,80}$/.test(v || "");
const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v || "") && (v || "").length <= 254;
const isValidMessage = (v) => {
    const len = (v || "").length;
    return len >= 10 && len <= 2000;
};

const SERVICE_ID = "service_u7dzt8w";
const TEMPLATE_ID = "template_5bzcjip";
const USER_ID = "_TsfdMeaMFT18wwQk";

const sendEmail = () => {
    successMessage.value = "";
    errorMessage.value = "";

    if (honeypot.value) {
        errorMessage.value = "Requête invalide.";
        return;
    }

    const nom = sanitize(form.value.nom);
    const prenom = sanitize(form.value.prenom);
    const email = sanitize(form.value.email.toLowerCase());
    // Autorise plus de liberté dans le message mais sans balises
    const message = sanitize(form.value.message);

    if (!nom || !prenom || !email || !message) {
        errorMessage.value = "Merci de remplir tous les champs.";
        return;
    }
    if (!isValidName(nom) || !isValidName(prenom)) {
        errorMessage.value = "Nom ou prénom invalide.";
        return;
    }
    if (!isValidEmail(email)) {
        errorMessage.value = "Email invalide.";
        return;
    }
    if (!isValidMessage(message)) {
        errorMessage.value = "Message trop court ou trop long.";
        return;
    }

    // Réinjecte les valeurs nettoyées
    form.value = { nom, prenom, email, message };

    const params = { nom, prenom, email, message };

    emailjs
        .send(SERVICE_ID, TEMPLATE_ID, params, USER_ID)
        .then(() => {
            successMessage.value = "✅ Votre message a bien été envoyé !";
            form.value = { nom: "", prenom: "", email: "", message: "" };
            honeypot.value = "";
        })
        .catch(() => {
            errorMessage.value = "❌ Une erreur est survenue, veuillez réessayer.";
        });
};
</script>

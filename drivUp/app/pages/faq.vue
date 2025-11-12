<template>
    <div class="relative overflow-hidden bg-violet-lum">
        <!-- ====== Bannière FAQ ====== -->
        <section class="relative py-24 sm:py-24 md:py-32 px-4 sm:px-6 text-center bg-violet-lum">
            <div class="max-w-3xl mx-auto">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 md:mb-8 tracking-tight">
                    Foire Aux Questions&nbsp;: <span class="vl-brand">Driv'Up</span>
                </h1>
                <p class="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-gray-700">
                    Toutes les réponses à vos questions sur l'inscription, les formules, le règlement,
                    le suivi et l'organisation des cours.
                </p>
            </div>
        </section>

        <!-- ====== Bloc FAQ (Accordéon) ====== -->
        <section class="py-6 sm:py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-b from-white to-green-light/40">
            <div class="max-w-3xl mx-auto">
                <!-- Titre de section -->
                <div class="mb-8 sm:mb-10 md:mb-12 text-center">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Vos questions</h2>
                    <div class="h-1 w-12 sm:w-16 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full">
                    </div>
                </div>

                <!-- Items FAQ -->
                <div class="space-y-3 sm:space-y-4">
                    <div v-for="(item, index) in faqItems" :key="index" class="group bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300
                        hover:border-purple-300 hover:shadow-lg">
                        <button
                            class="w-full flex justify-between items-start sm:items-center px-4 sm:px-6 py-4 sm:py-5 text-left cursor-pointer gap-3"
                            @click="toggle(index)" :aria-expanded="openIndex === index">
                            <h3 class="text-sm sm:text-base md:text-lg font-semibold text-gray-900 transition-colors duration-300 flex items-start sm:items-center gap-2 sm:gap-3"
                                :class="openIndex === index ? 'text-purple-600' : 'group-hover:text-purple-600'">
                                <span
                                    class="inline-flex flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-400 text-white text-xs sm:text-sm font-bold items-center justify-center">
                                    {{ index + 1 }}
                                </span>
                                <span class="line-clamp-2 sm:line-clamp-none">{{ item.question }}</span>
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 flex-shrink-0 transition-transform duration-300 mt-0.5 sm:mt-0"
                                :class="openIndex === index ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <transition name="accordion">
                            <div v-if="openIndex === index"
                                class="accordion-content px-4 sm:px-6 py-4 sm:py-6 bg-gradient-to-br from-purple-50 to-purple-100/50 border-t border-gray-200">
                                <p class="text-sm sm:text-base text-gray-700 leading-relaxed" v-html="item.answer"></p>
                            </div>
                        </transition>
                    </div>
                </div>

                <!-- CTA Contact -->
                <div class="flex justify-center mt-12 sm:mt-14 md:mt-16 pt-8 border-t border-gray-200">
                    <NuxtLink to="/contact"
                        class="vl-cta-primary inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base">
                        <span>Contactez-nous si votre question ne figure pas ici</span>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
}

const faqItems = [
    {
        question: "Comment s'inscrire chez Driv'Up ?",
        answer: `Pour vous inscrire, rien de plus simple ! Remplissez notre formulaire en ligne sur la page
    <a href="/inscription" class="font-semibold text-purple-600 hover:text-purple-800 underline decoration-2 underline-offset-2 transition-colors">d'inscription</a>, appelez-nous au
    <a class='font-semibold text-purple-600 hover:text-purple-800 underline decoration-2 underline-offset-2 transition-colors' href='tel:0663026397'>07 56 86 49 91</a>,
    ou envoyez-nous un email à
    <a class='font-semibold text-purple-600 hover:text-purple-800 underline decoration-2 underline-offset-2 transition-colors' href='mailto:contact@drivup-ae.com'>contact@drivup-ae.com</a>.
    <br><br>Nous vous recontacterons rapidement pour finaliser votre inscription et planifier vos premières heures de conduite.`,
    },
    {
        question: 'Quel forfait choisir ?',
        answer: `Le choix du forfait dépend de vos besoins et de votre expérience. Nous proposons des forfaits permis B
    (boîte manuelle ou automatique), code de la route et stages intensifs.
    <br><br>
    Chaque élève bénéficie d'un accompagnement
    personnalisé pour trouver la formule qui lui convient. N'hésitez pas à nous consulter pour une recommandation adaptée.`,
    },
    {
        question: 'Peut-on régler en plusieurs fois ?',
        answer: `Oui ! Nous proposons des facilités de paiement pour que votre formation reste accessible.
    Vous pouvez régler en plusieurs fois sans frais selon le forfait choisi.
    <br><br>
    Financement possible via France Travail pour certaines formations. Contactez-nous pour connaître les modalités.`,
    },
    {
        question: 'Quand débutent les heures de conduite ?',
        answer: `Vos premières heures de conduite peuvent débuter dès que votre inscription et votre dossier sont complets.
    <br><br>
    Nous organisons ensemble vos séances selon vos disponibilités. Vous pouvez commencer rapidement après votre inscription !`,
    },
    {
        question: 'Suis-je suivi pendant la formation ?',
        answer: `Bien sûr ! Chaque élève profite d'un suivi personnalisé.
    <br><br>
    Nos moniteurs suivent votre progression, adaptent les cours à vos besoins et vous préparent pour l'examen. Vous ne serez jamais seul(e) dans votre parcours.`,
    },
    {
        question: 'Où rejoindre mon enseignant ?',
        answer: `Retrouvez-nous facilement à l'un de nos points de rendez-vous :
    <br><br>
    <strong>📍 Rotonde</strong> - Strasbourg<br>
    <strong>📍 Parc des Sports</strong> - Cronenbourg<br>`,
    },
]
</script>

<style scoped>
.vl-cta-primary {
    background: linear-gradient(to right, #7c3aed, #a779ff);
    color: #fff;
    padding: 1rem 2.5rem;
    border-radius: 1.5rem;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
}

.vl-cta-primary:hover {
    background: linear-gradient(to right, #6d28d9, #9333ea);
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(124, 58, 237, 0.3);
}

.accordion-enter-active {
    transition: all 0.4s ease-out;
}

.accordion-leave-active {
    transition: all 0.35s ease-in;
}

.accordion-enter-from {
    opacity: 0;
    max-height: 0;
}

.accordion-leave-to {
    opacity: 0;
    max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
    opacity: 1;
    max-height: 600px;
}

.accordion-content {
    overflow: hidden;
}

/* Amélioration du focus pour l'accessibilité */
button:focus-visible {
    outline: 2px solid #a78bfa;
    outline-offset: 2px;
}

/* Style des liens dans les réponses */
a {
    transition: all 0.2s ease;
}

/* Responsive ajustements */
@media (max-width: 640px) {
    .vl-cta-primary {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
    }
}
</style>

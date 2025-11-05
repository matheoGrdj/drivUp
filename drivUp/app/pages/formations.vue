<template>
    <div class="relative overflow-hidden bg-violet-lum">
        <!-- ====== Bannière / Introduction ====== -->
        <section class="relative py-28 px-6 text-center bg-violet-lum">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                    Nos Formations Permis & Code
                </h1>
                <p class="text-lg leading-relaxed max-w-2xl mx-auto">
                    <span class="vl-brand font-bold">Driv’Up</span> est votre auto-école à Cronenbourg, moderne et
                    sérieuse, qui
                    accompagne chaque élève vers la réussite.
                    Grâce à un suivi personnalisé, des moniteurs expérimentés et des formations adaptées à vos besoins,
                    nous vous permettons de passer votre permis sereinement et rapidement.
                </p>
            </div>
        </section>
        <!-- ====== Liste des formations ====== -->
        <section class="bg-gradient-to-b from-white to-green-light/40 py-24 px-6">
            <div class="max-w-6xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold text-green-main mb-4">Nos Formations</h2>
                <p class="">Découvrez nos différentes formules selon votre profil et vos objectifs.</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <!-- Formation -->
                <div v-for="formation in formations" :key="formation.title"
                    class="bg-white/80 backdrop-blur-sm border border-white/40 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out">
                    <img :src="formation.img" :alt="formation.title"
                        :srcset="`${formation.img} 1x, ${formation.img.replace(/\.\w+$/, '@2x.$&')} 2x`"
                        class="rounded-xl mb-4 w-full  h-48 group-hover:scale-105 transition-transform duration-300" />
                    <h3 class="text-2xl text-center font-semibold text-gray-900 mb-3">{{ formation.title }}</h3>
                    <ul class="text-gray-600 text-sm mb-4 text-left list-disc list-inside space-y-1">
                        <li v-for="item in formation.points" :key="item">{{ item }}</li>
                    </ul>
                    <div class="text-lg font-bold text-gray-900 mb-4" v-html="formation.price"></div>
                    <div class="space-y-2 text-center">
                        <a v-if="formation.link" :href="formation.link" target="_blank"
                            class="inline-block text-purple-700 font-medium hover:text-purple-900 underline">
                            Session d’entraînement gratuite
                        </a>
                        <NuxtLink to="/contact"
                            class="block bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-xl py-3 px-6 font-semibold hover:from-purple-700 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Prendre rendez-vous
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
const formations = [
    {
        title: "Code de la route",
        img: "/images/codeDeLaRoute.webp",
        points: ["Accès plateforme Rousseau", "Suivi de progression", "Tests illimités"],
        price: "19,90€ (en ligne) / 90€ (en ligne + bureau)",
        link: "https://www.codesrousseau.fr/test-code-de-la-route-gratuit",
    },
    {
        title: "Pack Permis B (Boîte manuelle)",
        img: "/images/permisB.webp",
        points: ["Entraînement code", "1h d’évaluation dématérialisée", "19h de conduite"],
        price:
            '<span class="line-through text-gray-600 mr-2">1099€</span><span class="text-green-main font-bold">Offre de lancement : 899€</span>',
    },
    {
        title: "Permis B (Boîte automatique)",
        img: "/images/permisB.webp",
        points: ["Entraînement code", "1h d’évaluation dématérialisée", "12h de conduite"],
        price:
            '<span class="line-through text-gray-600 mr-2">899€</span><span class="text-green-main font-bold">Offre de lancement : 799€</span>',
    },
    {
        title: "Pack AAC (Boîte manuelle)",
        img: "/images/packAAC.jpg",
        points: ["Code en salle", "Examen théorique", "24h de conduite (dont RDV pédagogiques)"],
        price: "1349€",
    },
    {
        title: "Pack AAC (Boîte automatique)",
        img: "/images/packAAC.jpg",
        points: ["Code en salle", "Examen théorique", "18h de conduite (dont RDV pédagogiques)"],
        price: "1049€",
    },
];
</script>

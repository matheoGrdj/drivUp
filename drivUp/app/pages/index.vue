<template>
    <div class="relative overflow-hidden">
        <!-- ====== BANNIÈRE PRINCIPALE ====== -->
        <section
            class="relative min-h-screen flex flex-col justify-center items-center text-center bg-violet-lum overflow-hidden">
            <!-- HALOS DÉCORATIFS -->
            <div aria-hidden="true"
                class="absolute -top-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px] rounded-full blur-[120px] pointer-events-none violet-halo">
            </div>
            <div aria-hidden="true"
                class="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px] rounded-full blur-[120px] pointer-events-none green-halo">
            </div>

            <!-- VOITURE ANIMÉE -->
            <div class="absolute bottom-10 w-44 md:w-56 lg:w-72 animate-drive z-10">
                <img src="/images/car.png" alt="Voiture Driv'Up" class="drop-shadow-2xl opacity-100" />
            </div>

            <!-- CONTENU PRINCIPAL -->
            <div class="relative z-30 max-w-4xl px-6">
                <h1 class="vl-title text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight">
                    <span class="block">Passe ton permis</span>
                    <span class="block mt-3">avec <span class="vl-brand">Driv'Up</span></span>
                </h1>
                <p class="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Cours clairs, moniteurs expérimentés et outils modernes pour progresser sereinement vers la
                    réussite.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <NuxtLink to="/inscription" class="vl-cta-primary inline-flex items-center justify-center gap-2">
                        <span>Je m'inscris maintenant</span>
                    </NuxtLink>
                    <NuxtLink to="/formations" class="vl-cta-ghost inline-flex items-center justify-center gap-2">
                        <span>Découvrir les formations</span>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ====== POURQUOI CHOISIR DRIV'UP ====== -->
        <section class="bg-white py-24 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-20">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-metallic-purple section-title">
                        Pourquoi choisir <span class="vl-brand">Driv'Up</span> ?
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Une approche humaine et moderne pour réussir votre permis
                    </p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="form-card">
                        <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-metallic-purple" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-metallic-purple mb-2 text-center">Suivi personnalisé</h3>
                        <p class="text-gray-600 text-center text-sm">Un accompagnement adapté à votre rythme et vos
                            besoins.</p>
                    </div>

                    <div class="form-card">
                        <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-metallic-purple" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-metallic-purple mb-2 text-center">Tarifs transparents</h3>
                        <p class="text-gray-600 text-center text-sm">Des formules claires sans frais cachés avec
                            facilités de paiement.</p>
                    </div>

                    <div class="form-card">
                        <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-metallic-purple" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-metallic-purple mb-2 text-center">Moniteurs dévoués</h3>
                        <p class="text-gray-600 text-center text-sm">Une équipe passionnée et expérimentée pour votre
                            succès.</p>
                    </div>

                    <div class="form-card">
                        <div class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-metallic-purple" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-metallic-purple mb-2 text-center">Planning flexible</h3>
                        <p class="text-gray-600 text-center text-sm">Des créneaux adaptés à votre emploi du temps.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== NOS FORMATIONS ====== -->
        <section class="bg-gradient-to-b from-green-main/10 to-green-main/15 py-24 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-metallic-purple section-title">
                        Nos formations
                    </h2>
                    <p class="text-lg text-gray-600">Des parcours adaptés à votre profil et vos objectifs</p>
                </div>
                <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                    <div class="form-card group">
                        <div class="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                            <img src="/icons/circulation.png" alt="Icône Code de la route"
                                class="w-10 h-10 text-metallic-purple" />
                        </div>
                        <h3 class="text-2xl font-bold text-metallic-purple mb-3">Code de la route</h3>
                        <p class="text-gray-600 mb-6">Préparez votre examen théorique avec nos outils interactifs et nos
                            moniteurs expérimentés.</p>
                        <NuxtLink to="/formations"
                            class="text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-flex items-center justify-center gap-2">
                            <span>En savoir plus</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </NuxtLink>
                    </div>

                    <div class="form-card group">
                        <div class="inline-block p-3 bg-purple-100 rounded-lg mb-4">
                            <img src="/icons/permis.png" alt="Icône Permis B" class="w-10 h-10 text-metallic-purple" />
                        </div>
                        <h3 class="text-2xl font-bold text-metallic-purple mb-3">Permis B & AAC</h3>
                        <p class="text-gray-600 mb-6">Maîtrisez la conduite avec nos heures pratiques et notre suivi
                            personnalisé intensif.</p>
                        <NuxtLink to="/formations"
                            class="text-purple-600 font-semibold hover:text-purple-800 transition-colors inline-flex items-center justify-center gap-2">
                            <span>En savoir plus</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 flex-shrink-0" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
                <div class="text-center">
                    <NuxtLink to="/formations" class="vl-cta-primary inline-flex items-center justify-center gap-2">
                        <span>Voir toutes les formations</span>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ====== TÉMOIGNAGES ====== -->
        <section class="bg-white py-24 px-6">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-metallic-purple section-title">
                        Témoignages de nos élèves
                    </h2>
                    <p class="text-lg text-gray-600">Découvrez les avis de ceux qui nous ont fait confiance</p>
                </div>
                <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div class="testimonial">
                        <div
                            class="w-16 h-16 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-2xl">
                            L
                        </div>
                        <p class="italic text-gray-700 mb-4">
                            "J'ai obtenu mon permis du premier coup grâce à Driv'Up ! Les moniteurs sont très
                            professionnels et à l'écoute."
                        </p>
                        <div class="flex justify-center gap-1 mb-3">
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                        </div>
                        <span class="block font-semibold text-metallic-purple-dark text-center">Léa, 22 ans</span>
                    </div>

                    <div class="testimonial">
                        <div
                            class="w-16 h-16 rounded-full mx-auto mb-4 bg-green-secondary text-white flex items-center justify-center font-bold text-2xl">
                            T
                        </div>
                        <p class="italic text-gray-700 mb-4">
                            "Une expérience incroyable avec des moniteurs attentifs et motivants. Je recommande vivement
                            !"
                        </p>
                        <div class="flex justify-center gap-1 mb-3">
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                        </div>
                        <span class="block font-semibold text-metallic-purple-dark text-center">Thomas, 25 ans</span>
                    </div>

                    <div class="testimonial">
                        <div
                            class="w-16 h-16 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-2xl">
                            I
                        </div>
                        <p class="italic text-gray-700 mb-4">
                            "La formation était agréable et efficace. J'ai apprécié la flexibilité des horaires."
                        </p>
                        <div class="flex justify-center gap-1 mb-3">
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                            <span class="text-yellow-400">★</span>
                        </div>
                        <span class="block font-semibold text-metallic-purple-dark text-center">Inès, 20 ans</span>
                    </div>
                </div>
                <div class="text-center mt-12">
                    <NuxtLink to="/temoignages" class="vl-cta-ghost inline-flex items-center justify-center gap-2">
                        <span>Voir tous les témoignages</span>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- ====== STATISTIQUES ====== -->
        <section class="bg-violet-lum py-24 px-6">
            <div class="max-w-5xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-16 text-metallic-purple section-title">
                    Nos résultats vous parlent
                </h2>
                <div class="grid md:grid-cols-3 gap-12">
                    <div class="hover:scale-105 transition-transform">
                        <div class="text-6xl md:text-7xl font-black text-metallic-purple mb-3 drop-shadow-lg">
                            92%
                        </div>
                        <p class="text-lg text-gray-700 font-semibold">Taux de réussite</p>
                        <p class="text-sm text-gray-600 mt-1">à la première tentative</p>
                    </div>
                    <div class="hover:scale-105 transition-transform">
                        <div class="text-6xl md:text-7xl font-black text-green-main mb-3 drop-shadow-lg">
                            +1500
                        </div>
                        <p class="text-lg text-gray-700 font-semibold">Élèves formés</p>
                        <p class="text-sm text-gray-600 mt-1">depuis notre création</p>
                    </div>
                    <div class="hover:scale-105 transition-transform">
                        <div class="text-6xl md:text-7xl font-black text-metallic-purple-light mb-3 drop-shadow-lg">
                            4.9/5
                        </div>
                        <p class="text-lg text-gray-700 font-semibold">Note moyenne</p>
                        <p class="text-sm text-gray-600 mt-1">avis clients vérifiés</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== APPEL À L'ACTION FINAL ====== -->
        <section class="bg-white py-24 px-6">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 text-metallic-purple">
                    Prêt à démarrer votre formation ?
                </h2>
                <p class="text-xl text-gray-600 mb-10">
                    Inscrivez-vous dès aujourd'hui et commencez votre parcours vers la réussite.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <NuxtLink to="/inscription" class="vl-cta-primary inline-flex items-center justify-center gap-2">
                        <span>S'inscrire maintenant</span>
                    </NuxtLink>
                    <NuxtLink to="/contact" class="vl-cta-ghost inline-flex items-center justify-center gap-2">
                        <span>Nous contacter</span>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: "Accueil",
    meta: [
        {
            name: "description",
            content: "Driv'Up - Votre auto-école moderne à Strasbourg. Cours clairs, moniteurs expérimentés et outils modernes pour réussir votre permis.",
        },
        {
            name: "keywords",
            content: "auto-école Strasbourg, permis de conduire, formation conduite, moniteur expérimenté",
        },
        {
            property: "og:title",
            content: "Driv'Up - Auto-école à Strasbourg | Accueil",
        },
        {
            property: "og:description",
            content: "Découvrez Driv'Up, votre auto-école moderne avec 92% de taux de réussite.",
        },
    ],
})
</script>

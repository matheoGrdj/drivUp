<template>
    <div class="relative overflow-hidden">
        <!-- ====== Bannière principale ====== -->
        <section
            class="relative min-h-screen flex flex-col justify-center items-center text-center bg-violet-lum overflow-hidden">
            <!-- SPOT / HALO -->
            <div aria-hidden="true" class="absolute -top-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px]
       rounded-full blur-[120px] pointer-events-none violet-halo"></div>
            <div aria-hidden="true" class="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px]
       rounded-full blur-[120px] pointer-events-none green-halo"></div>
            <!-- VOITURE (optionnelle) -->
            <div class="absolute bottom-10 w-44 md:w-56 lg:w-72 animate-drive z-20">
                <img src="/images/car.png" alt="Voiture Driv'Up" class="drop-shadow-2xl opacity-100" />
            </div>
            <!-- CONTENU -->
            <div class="relative z-30 max-w-3xl px-6">
                <h1 class="vl-title text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    <span class="block">Passe ton permis</span>
                    <span class="block mt-2">avec <span class="vl-brand">Driv’Up</span></span>
                </h1>
                <p class="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Cours clairs, moniteurs pros et
                    outils modernes pour avancer sereinement.</p>
                <div class="flex items-center justify-center gap-4">
                    <NuxtLink to="/inscription" class="vl-cta-primary">Je m’inscris</NuxtLink>
                    <NuxtLink to="/tarifs" class="vl-cta-secondary">Voir les tarifs</NuxtLink>
                </div>
            </div>
        </section>
        <!-- ====== Section Pourquoi choisir Driv’Up ====== -->
        <section class="bg-white py-24 px-6 text-gray-800">
            <div class="max-w-6xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-metallic-purple section-title">
                    Pourquoi choisir Driv’Up ?
                </h2>
                <p class="text-gray-600">Une approche humaine et connectée de l’apprentissage.</p>
            </div>
            <div class="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                <div class="card">
                    <Icon name="mdi:account-check-outline" class="text-green-secondary text-6xl mb-4 hover-glow" />
                    <h3 class="font-semibold text-xl mb-2 text-metallic-purple">Suivi personnalisé</h3>
                    <p>Un accompagnement pensé pour toi, selon ton rythme.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:cash-multiple" class="text-metallic-purple text-6xl mb-4 hover-glow" />
                    <h3 class="font-semibold text-xl mb-2 text-metallic-purple">Tarifs transparents</h3>
                    <p>Des formules simples, sans surprise.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:steering" class="text-metallic-purple text-6xl mb-4 hover-glow" />
                    <h3 class="font-semibold text-xl mb-2 text-metallic-purple">Moniteurs dévoués</h3>
                    <p>Une équipe passionnée par la réussite de ses élèves.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:calendar-clock" class="text-green-secondary text-6xl mb-4 hover-glow" />
                    <h3 class="font-semibold text-xl mb-2 text-metallic-purple">Planning flexible</h3>
                    <p>Des horaires adaptés à ton emploi du temps.</p>
                </div>
            </div>
        </section>
        <!-- ====== Nos formations ====== -->
        <section class="bg-gradient-to-b from-green-main/10 to-green-main/15 py-24 px-6 text-gray-800">
            <div class="max-w-6xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-metallic-purple section-title">
                    Nos formations
                </h2>
                <p class="text-gray-600">Des parcours adaptés à ton niveau.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <div class="form-card">
                    <h3 class="text-2xl font-semibold text-metallic-purple mb-3">Code de la route</h3>
                    <p>Prépare ton code avec nos outils interactifs.</p>
                </div>
                <div class="form-card">
                    <h3 class="text-2xl font-semibold text-metallic-purple mb-3">Permis B</h3>
                    <p>Des leçons pratiques pour progresser rapidement.</p>
                </div>
            </div>
        </section>
        <!-- ====== Témoignages ====== -->
        <section class="bg-white py-24 px-6">
            <div class="max-w-6xl mx-auto text-center mb-16">
                <h2 class="text-4xl font-bold mb-4 text-metallic-purple section-title">
                    Témoignages de nos élèves
                </h2>
            </div>
            <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">
                        L</div>
                    <p class="italic text-gray-700">"J’ai eu mon permis du premier coup !"</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Léa</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-green-secondary text-white flex items-center justify-center font-bold text-xl">
                        T</div>
                    <p class="italic text-gray-700">"Des moniteurs attentifs et motivants."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Thomas</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">
                        I</div>
                    <p class="italic text-gray-700">"Une formation agréable et efficace."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Inès</span>
                </div>
            </div>
        </section>
        <!-- ====== Nos chiffres / garanties ====== -->
        <section class="bg-violet-lum py-24 px-6 text-center">
            <h2 class="text-4xl font-bold mb-12 text-metallic-purple section-title">
                Nos chiffres parlent d’eux-mêmes
            </h2>
            <div class="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                <div>
                    <h3 class="text-6xl font-bold text-black drop-shadow-sm">92%</h3>
                    <p class="text-gray-600 mt-2">Taux de réussite</p>
                </div>
                <div>
                    <h3 class="text-6xl font-bold text-black drop-shadow-sm">+1500</h3>
                    <p class="text-gray-600 mt-2">Élèves formés</p>
                </div>
                <div>
                    <h3 class="text-6xl font-bold text-black drop-shadow-sm">4.9/5</h3>
                    <p class="text-gray-600 mt-2">Note moyenne</p>
                </div>
            </div>
        </section>
        <!-- ====== Tarifs & financement ====== -->
        <section class="bg-white py-24 text-center px-6">
            <h2 class="text-4xl font-bold mb-6 text-metallic-purple section-title">
                Tarifs & Financement
            </h2>
            <p class="text-gray-700 mb-10">Découvrez nos facilités de paiement.</p>
            <NuxtLink to="/tarifs" class="bg-metallic-purple text-white px-10 py-4 rounded-full shadow-lg
           hover:bg-metallic-purple-dark transition hover:shadow-[0_0_20px_#A779FF]">
                Voir la fiche complète
            </NuxtLink>
        </section>
    </div>
</template>


<script setup>
// Pour les icônes : installer le module nuxt-icon
// npm install nuxt-icon
</script>

<template>
    <div class="relative overflow-hidden">
        <!-- ====== Bannière principale ====== -->
        <section class="relative min-h-screen flex flex-col justify-center items-center text-white text-center
                bg-gradient-to-br from-[#3A1C71] via-[#6B2EFF] to-[#A779FF] overflow-hidden">
            <div
                class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-lightflow z-0">
            </div>


            <!-- Voiture animée -->
            <div class="absolute bottom-16 w-52 animate-drive z-20">
                <img src="/images/car.png" alt="Voiture Driv'Up" class="drop-shadow-2xl opacity-95" />
            </div>


            <!-- Reflet métallique subtil -->
            <div
                class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-lightflow">
            </div>

            <!-- Contenu principal -->
            <div class="relative z-10 max-w-2xl px-4">
                <h1 class="text-4xl md:text-6xl font-extrabold mb-6">
                    Passe ton permis sereinement avec
                    <span class="text-white">Driv’Up</span>
                </h1>
                <p class="text-lg md:text-xl mb-8">
                    L’auto-école moderne qui t’accompagne à chaque étape de ton apprentissage.
                </p>
                <NuxtLink to="/inscription"
                    class="bg-white text-purple-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-purple-100 transition">
                    Je m’inscris
                </NuxtLink>
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
                    <Icon name="mdi:account-check-outline" class="text-metallic-purple text-6xl mb-4 hover-glow" />
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
                    <Icon name="mdi:calendar-clock" class="text-metallic-purple text-6xl mb-4 hover-glow" />
                    <h3 class="font-semibold text-xl mb-2 text-metallic-purple">Planning flexible</h3>
                    <p>Des horaires adaptés à ton emploi du temps.</p>
                </div>
            </div>
        </section>


        <!-- ====== Nos formations ====== -->
        <section class="bg-gray-50 py-24 px-6 text-gray-800">
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
                    <div class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">L</div>
                    <p class="italic text-gray-700">"J’ai eu mon permis du premier coup !"</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Léa</span>
                </div>

                <div class="testimonial">
                    <div class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">T</div>
                    <p class="italic text-gray-700">"Des moniteurs attentifs et motivants."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Thomas</span>
                </div>

                <div class="testimonial">
                    <div class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">I</div>
                    <p class="italic text-gray-700">"Une formation agréable et efficace."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Inès</span>
                </div>
            </div>
        </section>


        <!-- ====== Nos chiffres / garanties ====== -->
        <section class="bg-gray-50 py-24 px-6 text-center">
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

<style scoped>
.card {
    background: linear-gradient(135deg, #ffffff 0%, #f7f4ff 50%, #ece6ff 100%);
    border: 1px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(6px);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(107, 46, 255, 0.1),
        0 2px 4px rgba(0, 0, 0, 0.05);
    transition: all .3s ease;
}

.card:hover {
    box-shadow: 0 8px 18px rgba(107, 46, 255, 0.25),
        0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
}


/* ==== Animation voiture améliorée ==== */

@keyframes drive {
  0% {
    transform: translateX(-120%) scaleX(1);
  }

  45% {
    transform: translateX(120vw) scaleX(1);
  }

  50% {
    transform: translateX(120vw) scaleX(-1); /* demi-tour */
  }

  95% {
    transform: translateX(-120%) scaleX(-1);
  }

  100% {
    transform: translateX(-120%) scaleX(1);
  }
}

.animate-drive {
  animation: drive 12s ease-in-out infinite;
}

@media (min-width: 1024px) {
  .animate-drive {
    animation-duration: 15s;
  }
}

.animate-drive img {
  animation: floatcar 2.2s ease-in-out infinite;
}

@keyframes floatcar {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}

@keyframes lightflow {
    0% {
        opacity: 0.05;
        transform: translateX(-200%);
    }

    50% {
        opacity: 0.25;
    }

    100% {
        opacity: 0.05;
        transform: translateX(200%);
    }
}

.animate-lightflow {
    background: linear-gradient(120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 100%);
    background-size: 200% 100%;
    animation: lightflow 5s infinite linear;
}
</style>

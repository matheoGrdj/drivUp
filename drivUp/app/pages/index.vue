<template>
    <div class="relative overflow-hidden">
        <!-- ====== Bannière principale ====== -->
        <!-- ====== Bannière principale ====== -->
        <section
            class="relative min-h-screen flex flex-col justify-center items-center text-white text-center bg-gradient-to-br from-purple-800 via-purple-600 to-purple-900 overflow-hidden">
            <!-- Route stylisée -->
            <div
                class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 via-gray-900/10 to-transparent">
            </div>

            <!-- Voiture animée -->
            <div class="absolute bottom-16 w-52 animate-drive">
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
        <section class="bg-white py-20 px-6 text-gray-800">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-4 text-purple-800">Pourquoi choisir Driv’Up ?</h2>
                <p class="text-gray-600">Une approche humaine et connectée de l’apprentissage.</p>
            </div>

            <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div class="card">
                    <Icon name="mdi:account-check-outline" class="text-purple-700 text-5xl mb-4" />
                    <h3 class="font-semibold text-xl mb-2">Suivi 100 % personnalisé</h3>
                    <p>Chaque élève bénéficie d’un suivi adapté à son rythme et ses besoins.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:cash-multiple" class="text-purple-700 text-5xl mb-4" />
                    <h3 class="font-semibold text-xl mb-2">Tarifs transparents</h3>
                    <p>Des formules claires, sans frais cachés, accessibles à tous les budgets.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:steering" class="text-purple-700 text-5xl mb-4" />
                    <h3 class="font-semibold text-xl mb-2">Moniteurs dévoués</h3>
                    <p>Nos instructeurs sont à l’écoute et t’accompagnent avec bienveillance.</p>
                </div>
                <div class="card">
                    <Icon name="mdi:calendar-clock" class="text-purple-700 text-5xl mb-4" />
                    <h3 class="font-semibold text-xl mb-2">Planning flexible</h3>
                    <p>Réserve tes leçons facilement selon ton emploi du temps.</p>
                </div>
            </div>
        </section>

        <!-- ====== Nos formations ====== -->
        <section class="bg-gray-50 py-20 px-6 text-gray-800">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-4 text-purple-800">Nos formations</h2>
                <p class="text-gray-600">Apprends à ton rythme avec nos formules simples et efficaces.</p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
                    <h3 class="text-2xl font-semibold text-purple-700 mb-3">Code de la route</h3>
                    <p>Prépare ton code en ligne avec nos outils interactifs et nos sessions encadrées.</p>
                </div>
                <div class="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
                    <h3 class="text-2xl font-semibold text-purple-700 mb-3">Permis B</h3>
                    <p>Des leçons pratiques personnalisées pour te sentir en confiance au volant.</p>
                </div>
            </div>
        </section>

        <!-- ====== Témoignages ====== -->
        <section class="bg-white py-20 px-6">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-3xl font-bold mb-4 text-purple-800">Témoignages de nos élèves</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="testimonial">
                    <img src="" alt="Élève 1" class="w-20 h-20 rounded-full mx-auto mb-4" />
                    <p class="italic text-gray-700">"Super accompagnement, j’ai eu mon permis du premier coup !"</p>
                    <span class="block mt-2 font-semibold text-purple-700">– Léa</span>
                </div>
                <div class="testimonial">
                    <img src="" alt="Élève 2" class="w-20 h-20 rounded-full mx-auto mb-4" />
                    <p class="italic text-gray-700">"Des moniteurs bienveillants et toujours à l’écoute."</p>
                    <span class="block mt-2 font-semibold text-purple-700">– Thomas</span>
                </div>
                <div class="testimonial">
                    <img src="" alt="Élève 3" class="w-20 h-20 rounded-full mx-auto mb-4" />
                    <p class="italic text-gray-700">"Un suivi au top et un site très pratique."</p>
                    <span class="block mt-2 font-semibold text-purple-700">– Inès</span>
                </div>
            </div>
        </section>

        <!-- ====== Nos chiffres / garanties ====== -->
        <section class="bg-gray-50 py-20 px-6 text-center">
            <h2 class="text-3xl font-bold mb-10 text-purple-800">Nos chiffres parlent d’eux-mêmes</h2>
            <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div>
                    <h3 class="text-5xl font-bold text-purple-700">92%</h3>
                    <p class="text-gray-600 mt-2">Taux de réussite</p>
                </div>
                <div>
                    <h3 class="text-5xl font-bold text-purple-700">+1500</h3>
                    <p class="text-gray-600 mt-2">Élèves formés</p>
                </div>
                <div>
                    <h3 class="text-5xl font-bold text-purple-700">4.9/5</h3>
                    <p class="text-gray-600 mt-2">Note moyenne des avis</p>
                </div>
            </div>
        </section>

        <!-- ====== Tarifs & financement ====== -->
        <section class="bg-white py-20 text-center px-6">
            <h2 class="text-3xl font-bold mb-6 text-purple-800">Tarifs & Financement</h2>
            <p class="text-gray-700 mb-8">Découvrez toutes nos formules et facilités de paiement.</p>
            <NuxtLink to="/tarifs"
                class="bg-purple-700 text-white px-8 py-3 rounded-full shadow-md hover:bg-purple-800 transition">
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
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
        0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 2rem;
    transition: all 0.3s ease;
}

.card:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* ==== Animation voiture améliorée ==== */
@keyframes drive {
    0% {
        transform: translateX(-250px) scaleX(1) rotateZ(0deg);
    }

    45% {
        transform: translateX(105vw) scaleX(1) rotateZ(1deg);
    }

    50% {
        transform: translateX(105vw) scaleX(-1) rotateZ(0deg);
        /* inversion */
    }

    95% {
        transform: translateX(-250px) scaleX(-1) rotateZ(-1deg);
    }

    100% {
        transform: translateX(-250px) scaleX(1);
    }
}

.animate-drive {
    animation: drive 14s ease-in-out infinite;
}

@keyframes lightflow {
    0% {
        background-position: -300px 0;
    }

    100% {
        background-position: 300px 0;
    }
}

.animate-lightflow {
    background-size: 400px 100%;
    animation: lightflow 6s infinite linear;
}
</style>
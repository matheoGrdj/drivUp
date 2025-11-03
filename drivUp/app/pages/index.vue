<template>
    <div class="relative overflow-hidden">
        <!-- ====== Bannière principale ====== -->
        <section
            class="relative min-h-screen flex flex-col justify-center items-center text-center bg-violet-lum overflow-hidden">

            <!-- SPOT / HALO -->
            <div aria-hidden="true" class="absolute -top-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px]
       rounded-full blur-[120px] pointer-events-none violet-halo"></div>

            <!-- PETITE ETIQUETTE -->
            <div class="absolute top-10 left-6 md:left-12 z-30">
                <span
                    class="inline-flex items-center gap-2 bg-white/95 text-sm text-gray-800 px-3 py-1 rounded-full shadow-sm font-semibold">
                    <svg width="12" height="12" viewBox="0 0 24 24" class="opacity-90">
                        <circle cx="12" cy="12" r="10" fill="#6B2EFF" />
                    </svg>
                    Nouveau
                </span>
            </div>

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
                    <NuxtLink to="/tarifs" class="vl-cta-ghost">Voir les tarifs</NuxtLink>
                </div>
            </div>
        </section>

        <!-- ====== Section Pourquoi choisir Driv’Up ====== -->
        <section class="bg-white py-24 px-6 text-gray-800">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-metallic-purple section-title">
                    Pourquoi choisir Driv’Up ?
                </h2>
                <p class="text-gray-600">Une approche humaine et connectée de l’apprentissage.</p>
            </div>

            <div class="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <!-- Card 1 -->
                <div
                    class="relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition transform hover:-translate-y-1">
                    <div class="flex items-center gap-4 w-full">
                        <div
                            class="flex-none rounded-xl p-3 bg-gradient-to-br from-[#6B2EFF] to-[#10B981] text-white shadow-md">
                            <Icon name="mdi:account-check-outline" class="w-7 h-7" />
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900">Suivi personnalisé</h3>
                    </div>
                    <p class="text-gray-600">Un accompagnement pensé pour toi, selon ton rythme.</p>
                    <div class="mt-auto flex items-center gap-3">
                        <span
                            class="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M5 13l4 4L19 7" stroke="#059669" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            Garantie qualité
                        </span>
                    </div>
                </div>

                <!-- Card 2 -->
                <div
                    class="relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition transform hover:-translate-y-1">
                    <div class="flex items-center gap-4 w-full">
                        <div
                            class="flex-none rounded-xl p-3 bg-gradient-to-br from-[#6B2EFF] to-[#10B981] text-white shadow-md">
                            <Icon name="mdi:cash-multiple" class="w-7 h-7" />
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900">Tarifs transparents</h3>
                    </div>
                    <p class="text-gray-600">Des formules claires, adaptées et sans surprise.</p>
                    <div class="mt-auto flex items-center gap-3">
                        <span class="text-sm font-medium text-emerald-700">Paiement en 3x disponible</span>
                    </div>
                </div>

                <!-- Card 3 -->
                <div
                    class="relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition transform hover:-translate-y-1">
                    <div class="flex items-center gap-4 w-full">
                        <div
                            class="flex-none rounded-xl p-3 bg-gradient-to-br from-[#6B2EFF] to-[#10B981] text-white shadow-md">
                            <Icon name="mdi:steering" class="w-7 h-7" />
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900">Moniteurs dévoués</h3>
                    </div>
                    <p class="text-gray-600">Équipe expérimentée et pédagogue, suivis réguliers.</p>
                    <div class="mt-auto flex items-center gap-3">
                        <span
                            class="inline-flex items-center gap-2 text-xs font-semibold px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <circle cx="12" cy="12" r="10" stroke="#059669" stroke-width="1.5" />
                            </svg>
                            Coaching pro
                        </span>
                    </div>
                </div>

                <!-- Card 4 -->
                <div
                    class="relative flex flex-col items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border hover:shadow-md transition transform hover:-translate-y-1">
                    <div class="flex items-center gap-4 w-full">
                        <div
                            class="flex-none rounded-xl p-3 bg-gradient-to-br from-[#6B2EFF] to-[#10B981] text-white shadow-md">
                            <Icon name="mdi:calendar-clock" class="w-7 h-7" />
                        </div>
                        <h3 class="text-lg font-semibold text-slate-900">Planning flexible</h3>
                    </div>
                    <p class="text-gray-600">Réserve tes leçons simplement via l’appli ou le site.</p>
                    <div class="mt-auto flex items-center gap-3">
                        <span class="text-sm font-medium text-emerald-700">Réservation 24/7</span>
                    </div>
                </div>
            </div>
        </section>


        <!-- ====== Nos formations ====== -->
        <section class="bg-white pb-10 px-6">
            <div class="max-w-6xl mx-auto text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-metallic-purple section-title">Témoignages de nos élèves</h2>
            </div>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <blockquote class="testimonial bg-white rounded-2xl p-6 shadow-sm border">
                    <div class="flex items-center gap-4 mb-4">
                        <div
                            class="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-xl ring-1 ring-emerald-100">
                            L
                        </div>
                        <div>
                            <p class="text-gray-800 italic">"J’ai eu mon permis du premier coup !"</p>
                            <span class="block mt-2 font-semibold text-metallic-purple-dark">– Léa</span>
                        </div>
                    </div>
                </blockquote>

                <blockquote class="testimonial bg-white rounded-2xl p-6 shadow-sm border">
                    <div class="flex items-center gap-4 mb-4">
                        <div
                            class="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-xl ring-1 ring-emerald-100">
                            T
                        </div>
                        <div>
                            <p class="text-gray-800 italic">"Des moniteurs attentifs et motivants."</p>
                            <span class="block mt-2 font-semibold text-metallic-purple-dark">– Thomas</span>
                        </div>
                    </div>
                </blockquote>

                <blockquote class="testimonial bg-white rounded-2xl p-6 shadow-sm border">
                    <div class="flex items-center gap-4 mb-4">
                        <div
                            class="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-50 text-emerald-700 font-bold text-xl ring-1 ring-emerald-100">
                            I
                        </div>
                        <div>
                            <p class="text-gray-800 italic">"Une formation agréable et efficace."</p>
                            <span class="block mt-2 font-semibold text-metallic-purple-dark">– Inès</span>
                        </div>
                    </div>
                </blockquote>
            </div>
        </section>


        <!-- ====== Nos chiffres / garanties ====== -->
        <section class="bg-gray-50 py-24 px-6 text-center">
            <h2 class="text-4xl font-bold mb-10 text-metallic-purple section-title">Nos chiffres parlent d’eux-mêmes
            </h2>

            <div class="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                <div class="p-6 rounded-2xl bg-white shadow-sm border">
                    <div class="text-6xl font-extrabold text-metallic-purple">92<span
                            class="text-2xl align-baseline font-medium text-gray-500">%</span></div>
                    <p class="text-gray-600 mt-3">Taux de réussite</p>
                    <div class="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 font-semibold">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        Certifié & suivi
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-white shadow-sm border">
                    <div class="text-6xl font-extrabold text-metallic-purple">+1500</div>
                    <p class="text-gray-600 mt-3">Élèves formés</p>
                    <div class="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 font-semibold">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
                        </svg>
                        Communauté active
                    </div>
                </div>

                <div class="p-6 rounded-2xl bg-white shadow-sm border">
                    <div class="text-6xl font-extrabold text-metallic-purple">4.9/5</div>
                    <p class="text-gray-600 mt-3">Note moyenne</p>
                    <div class="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 font-semibold">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M12 17.3L8.2 19l.7-4.2L6 13l4.3-.7L12 8l1.7 4.3L18 13l-3 1.8.7 4.2z"
                                stroke="currentColor" stroke-width="0.6" />
                        </svg>
                        Avis vérifiés
                    </div>
                </div>
            </div>
        </section>

        <!-- ====== Tarifs & financement ====== -->
        <section class="bg-white py-24 text-center px-6">
            <h2 class="text-4xl font-bold mb-6 text-metallic-purple section-title">Tarifs & Financement</h2>
            <p class="text-gray-700 mb-8">Découvrez nos facilités de paiement et offres étudiantes.</p>

            <div class="flex items-center justify-center gap-4">
                <NuxtLink to="/tarifs"
                    class="inline-block px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-[#6B2EFF] to-[#10B981] text-white shadow-lg hover:opacity-95 transition">
                    Voir la fiche complète</NuxtLink>
                <NuxtLink to="/financement"
                    class="inline-block px-5 py-3 rounded-full font-semibold border border-emerald-200 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition">
                    Financement</NuxtLink>
            </div>
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
        transform: translateX(120vw) scaleX(-1);
        /* demi-tour */
    }

    95% {
        transform: translateX(-120%) scaleX(-1);
    }

    100% {
        transform: translateX(-120%) scaleX(1);
    }
}

/* Violet lumineux */
.bg-violet-lum {
    /* utilisé via class attr on section is just semantic, keep gradient in CSS */
    background: linear-gradient(180deg, #FFFFFF 0%, #F6F3FF 20%, #EFE6FF 60%, #E9DFFF 100%);
}

/* halo */
.violet-halo {
    background: radial-gradient(circle at center, rgba(107, 46, 255, 0.14), transparent 40%);
}

/* titre */
.vl-title {
    color: #0f172a;
    text-wrap: balance;
    letter-spacing: -0.01em;
}

.vl-brand {
    background: linear-gradient(90deg, #7C3AED, #A779FF 60%, #B89BFF);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 12px 40px rgba(107, 46, 255, 0.08);
    -webkit-text-stroke: 0.2px rgba(0, 0, 0, 0.05);
}

/* CTA */
.vl-cta-primary {
    display: inline-block;
    padding: .9rem 1.6rem;
    border-radius: 9999px;
    font-weight: 800;
    background: linear-gradient(90deg, #6B2EFF, #A779FF);
    color: #fff;
    box-shadow: 0 14px 40px rgba(107, 46, 255, 0.16);
    transition: transform .18s ease, box-shadow .18s ease;
}

.vl-cta-primary:hover {
    transform: translateY(-4px);
    box-shadow: 0 22px 50px rgba(107, 46, 255, 0.22);
}

.vl-cta-ghost {
    display: inline-block;
    padding: .7rem 1.3rem;
    border-radius: 9999px;
    border: 1px solid rgba(107, 46, 255, 0.14);
    background: rgba(255, 255, 255, 0.9);
    color: #6B2EFF;
    font-weight: 700;
}

.vl-cta-ghost:hover {
    background: rgba(107, 46, 255, 0.05);
    transform: translateY(-3px);
}

/* small screens */
@media (max-width:640px) {
    .vl-title {
        font-size: 1.6rem;
    }

    .vl-cta-primary {
        padding: .7rem 1.1rem
    }
}

.animate-drive {
    animation: drive 12s ease-in-out infinite;
}

/* small responsive tweaks */
@media (max-width: 640px) {
    .hero-title {
        font-size: 1.6rem;
        line-height: 1.06;
    }

    .cta-primary {
        padding: 0.7rem 1.1rem;
        font-size: 0.95rem;
    }

    .title-reflection {
        width: 140px;
        height: 6px;
    }
}

/* Optionnel : si tu veux un léger contour (stroke) sur le titre pour plus d'impact dans certaines tailles */
@media (min-width: 1024px) {
    .hero-title {
        text-shadow: 0 6px 18px rgba(107, 46, 255, 0.06);
    }

    .hero-title .brand {
        -webkit-text-stroke: 0.6px rgba(0, 0, 0, 0.06);
    }
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

.section-title {
    position: relative;
    display: inline-block;
}

.section-title::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #A779FF, #10B981, transparent);
    border-radius: 8px;
    opacity: 0.95;
}
</style>

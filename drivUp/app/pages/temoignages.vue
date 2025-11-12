<template>
    <div class="relative overflow-hidden">
        <!-- ====== Bannière principale ====== -->
        <section
            class="relative min-h-screen flex flex-col justify-center items-center text-center bg-violet-lum overflow-hidden">
            <!-- SPOT / HALO -->
            <div aria-hidden="true"
                class="absolute -top-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px] rounded-full blur-[120px] pointer-events-none violet-halo">
            </div>
            <div aria-hidden="true"
                class="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[540px] h-[540px] rounded-full blur-[120px] pointer-events-none green-halo">
            </div>
            <!-- CONTENU -->
            <div class="relative z-30 max-w-3xl px-6">
                <h1 class="vl-title text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    <span class="block">Ils ont choisi <span class="vl-brand">Driv’Up</span>,</span>
                    <span class="block mt-2">voilà ce qu’ils en pensent</span>
                </h1>
                <p class="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Découvrez les avis de nos élèves et
                    leurs succès.</p>
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
                    <p class="italic text-gray-700">"J’ai obtenu mon permis du premier coup grâce à Driv’Up ! Les
                        moniteurs sont très professionnels et à l’écoute."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Léa</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-green-secondary text-white flex items-center justify-center font-bold text-xl">
                        T</div>
                    <p class="italic text-gray-700">"Une expérience incroyable avec des moniteurs attentifs et
                        motivants. Je recommande vivement !"</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Thomas</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">
                        I</div>
                    <p class="italic text-gray-700">"La formation était agréable et efficace. J’ai apprécié la
                        flexibilité des horaires."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Inès</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">
                        A</div>
                    <p class="italic text-gray-700">"Grâce à Driv’Up, j’ai pu passer mon permis en un temps record.
                        Merci pour tout !"</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Alexandre</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-green-secondary text-white flex items-center justify-center font-bold text-xl">
                        S</div>
                    <p class="italic text-gray-700">"Les outils en ligne sont très pratiques et les moniteurs sont
                        toujours disponibles pour répondre à nos questions."</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Sophie</span>
                </div>
                <div class="testimonial">
                    <div
                        class="w-20 h-20 rounded-full mx-auto mb-4 bg-metallic-purple text-white flex items-center justify-center font-bold text-xl">
                        M</div>
                    <p class="italic text-gray-700">"Un grand merci à toute l’équipe pour leur soutien et leur
                        professionnalisme. J’ai réussi mon permis sans stress.</p>
                    <span class="block mt-3 font-semibold text-metallic-purple-dark">– Marc</span>
                </div>
            </div>
        </section>

        <!-- ====== Invitation à laisser un avis ====== -->
        <section class="bg-violet-lum py-24 text-center px-6">
            <h2 class="text-4xl font-bold mb-6 text-metallic-purple section-title">
                Laissez-nous un avis
            </h2>
            <p class="text-gray-700 mb-10">Votre avis est important pour nous. Partagez votre expérience avec Driv’Up.
            </p>
            <NuxtLink to="/contact"
                class="bg-metallic-purple text-white px-10 py-4 rounded-full shadow-lg hover:bg-metallic-purple-dark transition hover:shadow-[0_0_20px_#A779FF]">
                Laisser un avis
            </NuxtLink>
        </section>
    </div>
</template>

<template>
    <footer class="bg-white/95 border-t border-purple-200/40 py-12 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-10">
                <!-- Colonne 1 : Logo et description -->
                <div>
                    <a href="/" class="flex items-center gap-3 select-none">
                        <span class="text-lg md:text-2xl font-extrabold tracking-tight text-slate-900">
                            <span class="logo-main">Driv</span>
                            <span class="logo-accent ml-1">Up</span>
                        </span>
                    </a>
                    <p class="text-gray-600 mt-4">Une auto-école moderne et sérieuse pour passer votre permis
                        sereinement.</p>
                </div>
                <!-- Colonne 2 : Liens rapides -->
                <div>
                    <h3 class="text-lg font-semibold text-metallic-purple mb-4">Liens rapides</h3>
                    <ul class="space-y-2">
                        <li v-for="link in links" :key="link.href">
                            <a :href="link.href" class="text-gray-600 hover:text-green-light transition-colors">{{
                                link.label }}</a>
                        </li>
                    </ul>
                </div>
                <!-- Colonne 3 : Contact -->
                <div>
                    <h3 class="text-lg font-semibold text-metallic-purple mb-4">Contact</h3>
                    <p class="text-gray-600">104 rue de Hochfelden</p>
                    <p class="text-gray-600">67200 Strasbourg</p>
                    <p class="text-gray-600">Email: <span class="font-semibold">contact@drivup-ae.com</span></p>
                    <p class="text-gray-600">Téléphone: <span class="font-semibold">07 56 86 49 91</span></p>
                    <div class="mt-4">
                        <NuxtLink to="/contact"
                            class="bg-metallic-purple/70 hover:bg-metallic-purple-dark/80 text-white font-bold py-2 px-4 rounded-full">
                            Nous
                            contacter
                        </NuxtLink>
                    </div>
                </div>
                <!-- Colonne 4 : Légal & Réseaux sociaux -->
                <div>
                    <h3 class="text-lg font-semibold text-metallic-purple mb-4">Légal & Social</h3>
                    <ul class="space-y-2 mb-6">
                        <li>
                            <NuxtLink to="/mentionslegales-confidentialites"
                                class="text-gray-600 hover:text-metallic-purple transition-colors text-sm font-medium">
                                Mentions légales & Confidentialité
                            </NuxtLink>
                        </li>
                    </ul>
                    <h3 class="text-lg font-semibold text-metallic-purple mb-4">Suivez-nous</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-600 hover:text-[#6B2EFF] transition-colors">
                            <span class="sr-only">Facebook</span>
                            <img src="/icons/facebook.svg" alt="Facebook"
                                class="h-6 w-6 scale-125 hover:scale-135 transition-transform" />
                        </a>
                        <a href="#" class="text-gray-600 hover:text-[#6B2EFF] transition-colors">
                            <span class="sr-only">Instagram</span>
                            <img src="/icons/instagram.svg" alt="Instagram"
                                class="h-6 w-6 hover:scale-110 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="border-t border-purple-100/40 mt-10 pt-10 text-center text-gray-600">
                <p>&copy; {{ year }} DrivUp. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
const links = [
    { href: '/', label: 'Accueil' },
    { href: '/formations', label: 'Formations' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' }
]

const year = new Date().getFullYear();
</script>

<style scoped>
/* Logo accent */
.logo-accent {
    background: linear-gradient(90deg, #7C3AED, #A779FF);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 6px 20px rgba(107, 46, 255, 0.05);
}
</style>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isHome = route.path === '/'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/contact', label: 'Contact' }
]
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
           bg-gradient-to-r from-white/90 via-white/80 to-white/90
           shadow-[0_0_25px_rgba(107,46,255,0.12)]
           border-b border-purple-200/40 transition-all">

    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- LOGO METALLIQUE LISIBLE FOND CLAIR -->
      <h1 class="text-3xl font-extrabold tracking-wide
                 text-gray-900 relative">
        Driv<span class="text-[#6B2EFF] drop-shadow-[0_0_6px_#A779FF]">Up</span>

        <!-- léger effet métal -->
        <span class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-40 rounded-lg mix-blend-overlay pointer-events-none"></span>
      </h1>

      <!-- NAVIGATION -->
      <nav>
        <ul class="flex space-x-8 text-gray-800 font-medium">
          <li v-for="link in links" :key="link.href" class="relative group">
            <a
              :href="link.href"
              class="transition-all duration-300
                     hover:text-[#6B2EFF]"
            >
              {{ link.label }}
            </a>

            <!-- soulignement animé + plus visible -->
            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B2EFF]
                     shadow-[0_0_6px_#A779FF] opacity-0
                     transition-all duration-300 group-hover:w-full group-hover:opacity-100">
            </span>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Ligne de lumière améliorée -->
    <div class="absolute bottom-0 left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[#6B2EFF] to-transparent
                animate-lightbeam opacity-80"></div>
  </header>
</template>

<style scoped>
@keyframes lightbeam {
  0% { transform: translateX(-100%); opacity: .25; }
  50% { opacity: .9; }
  100% { transform: translateX(100%); opacity: .25; }
}
.animate-lightbeam {
  animation: lightbeam 5s infinite linear;
}
</style>

<script setup>
import { ref } from 'vue'
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

const mobileMenuOpen = ref(false)
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-xl
           bg-gradient-to-r from-white/90 via-white/80 to-white/90
           shadow-[0_0_25px_rgba(107,46,255,0.12)]
           border-b border-purple-200/40 transition-all">

    <!-- HEADER DESKTOP + MOBILE -->
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- LOGO -->
      <h1 class="text-3xl font-extrabold tracking-wide text-gray-900 relative">
        Driv<span class="text-[#6B2EFF] drop-shadow-[0_0_6px_#A779FF]">Up</span>
        <span class="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent
                      opacity-40 rounded-lg mix-blend-overlay pointer-events-none"></span>
      </h1>

      <!-- NAVIGATION DESKTOP -->
      <nav class="hidden md:block">
        <ul class="flex space-x-8 text-gray-800 font-medium">
          <li
            v-for="link in links"
            :key="link.href"
            class="relative group"
          >
            <a
              :href="link.href"
              class="transition-all duration-300 hover:text-[#6B2EFF]"
            >
              {{ link.label }}
            </a>

            <span
              class="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B2EFF]
                     shadow-[0_0_6px_#A779FF] opacity-0
                     transition-all duration-300
                     group-hover:w-full group-hover:opacity-100">
            </span>
          </li>
        </ul>
      </nav>

      <!-- BOUTON MOBILE -->
      <button
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
      >
        <span
          class="block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300"
          :class="mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''"
        ></span>

        <span
          class="block w-7 h-[3px] bg-gray-800 rounded my-1 transition-all duration-300"
          :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"
        ></span>

        <span
          class="block w-7 h-[3px] bg-gray-800 rounded transition-all duration-300"
          :class="mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
        ></span>
      </button>
    </div>

    <!-- MENU MOBILE -->
    <transition name="slide-fade">
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-200/30 shadow-xl"
      >
        <ul class="flex flex-col py-6 text-center text-gray-800 font-medium space-y-6 text-lg">
          <li
            v-for="link in links"
            :key="link.href"
          >
            <a
              :href="link.href"
              class="block hover:text-[#6B2EFF] transition duration-300"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>

    <!-- Ligne de lumière -->
    <div class="absolute bottom-0 left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-[#6B2EFF] to-transparent
                animate-lightbeam opacity-80"></div>
  </header>
</template>

<style scoped>
/* Animation de la ligne de lumière */
@keyframes lightbeam {
  0% { transform: translateX(-100%); opacity: .25; }
  50% { opacity: .9; }
  100% { transform: translateX(100%); opacity: .25; }
}
.animate-lightbeam {
  animation: lightbeam 5s infinite linear;
}

/* Transition menu mobile */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

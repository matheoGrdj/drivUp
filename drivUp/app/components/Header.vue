<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)
const isLoggedIn = ref(false)

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  checkAuth()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const checkAuth = () => {
  const token = localStorage.getItem('authToken')
  isLoggedIn.value = !!token
}

const logout = () => {
  localStorage.removeItem('authToken')
  isLoggedIn.value = false
  window.location.href = '/' // ou utilise un router push si tu veux
}

const onScroll = () => { scrolled.value = window.scrollY > 18 }

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/temoignages', label: 'Témoignages' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' }
]

const isActive = (href) => route.path === href

const headerClasses = computed(() => {
  return [
    'fixed top-0 left-0 w-full z-50 transition-all duration-250',
    'backdrop-blur-xl',
    scrolled.value ? 'py-2 shadow-[0_8px_30px_rgba(107,46,255,0.06)]' : 'py-4 shadow-none',
    route.path === '/' ? 'bg-white/60 border-b border-purple-100/40' : 'bg-white/95 border-b border-purple-200/40'
  ].join(' ')
})
</script>

<template>
  <header :class="headerClasses">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- LOGO -->
      <a href="/" class="flex items-center gap-3 select-none">
        <span class="text-lg md:text-2xl font-extrabold tracking-tight text-slate-900">
          <span class="logo-main">Driv</span>
          <span class="logo-accent ml-1">Up</span>
        </span>
      </a>

      <!-- DESKTOP NAV -->
      <nav class="hidden md:block">
        <ul class="flex items-center gap-6">
          <li v-for="link in links" :key="link.href" class="relative">
            <a :href="link.href" :aria-current="isActive(link.href) ? 'page' : false" class="inline-flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-200
                     hover:text-[#6B2EFF] focus:outline-none focus:ring-2 focus:ring-[#A779FF]/30"
              :class="isActive(link.href) ? 'text-[#4A1CA0] bg-[#F4EFFF] shadow-[0_6px_18px_rgba(107,46,255,0.06)]' : 'text-gray-700'">
              <span>{{ link.label }}</span>

              <!-- active pill indicator -->
              <span v-if="isActive(link.href)"
                class="ml-1 w-2 h-2 rounded-full bg-[#6B2EFF] shadow-[0_0_8px_rgba(167,121,255,0.25)]"
                aria-hidden="true"></span>
            </a>

            <!-- underline on hover (desktop only visual) -->
            <span class="absolute left-0 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#A779FF] to-transparent opacity-0
                     transform scale-x-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-x-100"
              aria-hidden="true"></span>
          </li>
        </ul>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <template v-if="isLoggedIn">
          <a href="/dashboard" class="inline-flex items-center px-4 py-2 rounded-full font-semibold
                               bg-gradient-to-r from-[#6B2EFF] to-[#A779FF] text-white shadow-lg
                               hover:translate-y-[-2px] transition-transform">
            Tableau de bord
          </a>

          <button @click="logout" class="inline-flex items-center px-4 py-2 rounded-full font-semibold
                                 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-transform cursor-pointer">
            Déconnexion
          </button>
        </template>

        <template v-else>
          <a href="/inscription" class="inline-flex items-center px-4 py-2 rounded-full font-semibold
                                 bg-gradient-to-r from-[#6B2EFF] to-[#A779FF] text-white shadow-lg
                                 hover:translate-y-[-2px] transition-transform">
            Je m'inscris
          </a>
        </template>
      </div>


      <!-- MOBILE HAMBURGER -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" :aria-expanded="mobileMenuOpen" aria-controls="mobile-menu"
        class="md:hidden flex items-center justify-center w-10 h-10 rounded-lg
               bg-white/90 shadow-sm border border-purple-100/30
               focus:outline-none focus:ring-2 focus:ring-[#A779FF]/30">
        <svg v-if="!mobileMenuOpen" width="22" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="6" width="18" height="2" rx="1" :fill="'#1F2937'"></rect>
          <rect x="3" y="11" width="18" height="2" rx="1" :fill="'#1F2937'"></rect>
          <rect x="3" y="16" width="18" height="2" rx="1" :fill="'#1F2937'"></rect>
        </svg>

        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18" stroke="#4A1CA0" stroke-width="2" stroke-linecap="round"></path>
          <path d="M6 18L18 6" stroke="#4A1CA0" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </button>
    </div>

    <!-- subtle bottom light -->
    <div
      class="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#A779FF] to-transparent opacity-80 pointer-events-none">
    </div>
  </header>
  <!-- MOBILE MENU OVERLAY -->
  <transition name="fade">
    <div v-if="mobileMenuOpen" id="mobile-menu" class="fixed inset-0 z-50 flex flex-col items-center justify-start pt-28 px-6
               bg-white/80 backdrop-blur-md" role="dialog" aria-modal="true">
      <button @click="mobileMenuOpen = false"
        class="absolute top-6 right-6 w-10 h-10 rounded-md
                 bg-white/70 flex items-center justify-center border border-purple-100/30 focus:ring-2 focus:ring-[#A779FF]/30">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6L18 18" stroke="#4A1CA0" stroke-width="2" stroke-linecap="round"></path>
          <path d="M6 18L18 6" stroke="#4A1CA0" stroke-width="2" stroke-linecap="round"></path>
        </svg>
      </button>

      <ul class="w-full max-w-md text-center space-y-6">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="mobileMenuOpen = false" :class="['block px-6 py-3 rounded-xl text-lg font-semibold transition',
            isActive(link.href) ? 'bg-[#F4EFFF] text-[#4A1CA0]' : 'text-gray-800']">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div class="mt-8">
        <template v-if="isLoggedIn">
          <a href="/dashboard" @click="mobileMenuOpen = false" class="block px-6 py-3 rounded-full font-semibold
          bg-gradient-to-r from-[#6B2EFF] to-[#A779FF] text-white shadow-lg text-center mb-4">
            Dashboard
          </a>
          <button @click="logout" class="block w-full px-6 py-3 rounded-full font-semibold
          bg-gray-200 text-gray-800 hover:bg-gray-300 text-center">
            Déconnexion
          </button>
        </template>

        <template v-else>
          <a href="/inscription" @click="mobileMenuOpen = false" class="block px-6 py-3 rounded-full font-semibold
          bg-gradient-to-r from-[#6B2EFF] to-[#A779FF] text-white shadow-lg text-center">
            Je m'inscris
          </a>
        </template>
      </div>

    </div>
  </transition>
</template>

<style scoped>
/* Logo accent */
.logo-accent {
  background: linear-gradient(90deg, #7C3AED, #A779FF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 6px 20px rgba(107, 46, 255, 0.05);
}

/* small header shrink animation is handled via classes in script */

/* accessible focus rings */
a:focus,
button:focus {
  outline: none;
}

/* mobile menu fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* subtle elevated pill for active nav */
@media (min-width: 768px) {
  nav ul li a {
    position: relative;
  }

  nav ul li a::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    width: 40%;
    height: 4px;
    border-radius: 999px;
    background: linear-gradient(90deg, transparent, rgba(167, 121, 255, 0.12), transparent);
    opacity: 0;
    transition: opacity .18s ease, transform .18s ease;
  }

  nav ul li:hover a::after {
    opacity: 1;
    transform: translateX(-50%) scaleX(1.02);
  }
}

/* small screens tidy */
@media (max-width: 767px) {
  header {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}

/* ensure header does not overlap content visually */
body {
  scroll-padding-top: 72px;
}

/* adjust if header height changes */
</style>

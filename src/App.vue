<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Introduction from './components/Introduction.vue'
import Community from './components/Community.vue'
import History from './components/History.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />
  <main class="overflow-hidden">
    <Hero />
    <Introduction />
    <Community />
    <History />
  </main>
  <Footer />
</template>

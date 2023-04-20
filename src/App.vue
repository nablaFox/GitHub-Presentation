<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Productivity from './components/Productivity.vue'
import Collaboration from './components/Collaboration.vue'
import Security from './components/Security.vue'
import Demo from './components/Demo.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <Header />
  <main>
    <Hero />
    <Productivity />
    <Collaboration />
    <Security />
    <Demo />
  </main>
  <Footer />
 
</template>

<style scoped>
main {
  overflow: hidden
}
</style>

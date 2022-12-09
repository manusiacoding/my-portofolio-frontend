<script setup>
// components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// section
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import Service from './components/Service.vue'
</script>

<template>
  <Header />

  <Hero />

  <main id="main">

    <About />

    <Skill />

    <Resume />

    <Portfolio />

    <Service />

  </main>

  <Footer />

</template>


<script>
import Typed from 'typed.js'

export default {
  mounted() {
    const options = {
      strings: ["Web Developer", "Back-End Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    }
    new Typed('.typed', options)
  }
}
</script>

<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Fawwaz Hudzalfah Saputra</h1>
      <p>I'm <span class="typed" data-typed-items="Web Developer"></span></p>
      <div class="social-links">
        <a href="https://github.com/manusiacoding" class="twitter" target="_blank"><i class="bx bxl-github"></i></a>
        <a href="https://web.facebook.com/fawwaz.saputra.739" class="facebook" target="_blank"><i
            class="bx bxl-facebook"></i></a>
        <a href="https://instagram.com/manusiacoding_" class="instagram" target="_blank"><i
            class="bx bxl-instagram"></i></a>
        <a href="https://www.linkedin.com/in/fawwazsaputra/" class="linkedin" target="_blank"><i
            class="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </section><!-- End Hero -->
</template>
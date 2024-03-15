<script setup>
import Home from "@/components/Home.vue";
import Habilitys from "@/components/Habilitys.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <Home />
    <div class="margin">
      <Habilitys />
    </div>
    <div class="margin">
      <Projects />
    </div>
    <div class="margin">
      <Contact />
    </div>
    <div class="margin">
      <Footer />
    </div>
  </main>
</template>

<style>
.margin {
  margin-top: 70px;
}
</style>

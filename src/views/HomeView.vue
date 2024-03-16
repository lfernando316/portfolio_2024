<script setup>
import Home from "@/components/Home.vue";
import Habilitys from "@/components/Habilitys.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <main>
    <div class="px-2">
      <Home />
    </div>
    <div class="margin">
      <Habilitys />
    </div>
    <div class="margin">
      <Projects />
    </div>
    <div class="margin p-3">
      <Contact />
    </div>
    <div class="margin">
      <Footer />
    </div>
  </main>
</template>

<style>
.margin {
  margin-top: 20px;
}
</style>

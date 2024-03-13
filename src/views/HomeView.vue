<script setup>
import Home from "../components/Home.vue";
import Habilitys from "../components/Habilitys.vue";
import Contact from "../components/Contact.vue";
</script>

<template>
  <main>
    <Home />
    <div class="margin">
      <Habilitys />
    </div>
    <div class="margin">
      <Contact />
    </div>
  </main>
</template>

<style>
.margin {
  margin-top: 70px;
}
</style>

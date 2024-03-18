<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const images = ref([
  { src: "/imb_backend.webp" },
  { src: "/nodejs.webp" },
  { src: "/JavaScript.webp" },
  { src: "/postgresql.webp" },
  { src: "/django.webp" },
]);
const images2 = ref([
  { src: "/trabajo_equipo.webp" },
  { src: "/react.webp" },
  { src: "/pseudo.webp" },
  { src: "/basededatos.webp" },
  { src: "/compProgramando.webp" },
]);
</script>

<template>
  <div class="row flex-wrap col-12 justify-content-between contain" id="home">
    <!-- animate__animated animate__backInLeft animate__delay-1s -->
    <div class="col-md-6 home">
      <h1 class="titulo">
        <span class="titulo_span1">Hola,</span><br />
        <span class="titulo_spand2">
          soy Luis Fernando, <br />
          Desarrollador web
        </span>
      </h1>
      <h4 class="fw-bold">Frontend & Backend Developer</h4>
      <p class="text-start">
        Desarrollador web full stack, especializado en el backend, siempre en
        constante aprendizaje de nuevas tecnologías. Mi experiencia en
        desarrollo y como administrador de negocios me ha proporcionado
        habilidades para adaptarme eficazmente a la creación de software
        empresarial. Ansío contribuir al éxito de un equipo dinámico y orientado
        a objetivos, priorizando siempre la calidad del código como clave del
        proyecto.
      </p>
      <div class="d-flex justify-content-between flex-wrap mt-4">
        <div class="d-flex gap-3">
          <button class="button_contact">
            <router-link
              style="color: #06071b"
              class="text-decoration-none"
              to="#contacto"
            >
              Contáctame</router-link
            >
          </button>
          <button class="button_contact button_cv">
            <a
              style="color: #0cfca7"
              class="text-decoration-none"
              href="/Luis_fernando_salcedo_cv.pdf"
              target="_blank"
              >Descargar CV</a
            >
          </button>
        </div>
        <div class="d-flex gap-3 align-items-center fs-1 me-3">
          <a
            href="https://www.linkedin.com/in/luis-fernando-salcedo"
            target="_blank"
            ><i class="fa-brands fa-linkedin boton_redes"
          /></a>
          <a href="https://github.com/lfernando316 " target="_blank"
            ><i class="fa-brands fa-github boton_redes"
          /></a>
          <a href="https://wa.me/message/F74B2XUM7BXCP1 " target="_blank"
            ><i class="fa-brands fa-square-whatsapp boton_redes"
          /></a>
        </div>
      </div>
    </div>

    <div class="container col-md-6 col-12">
      <div class="row flex-nowrap col-12 justify-content-end">
        <div class="overflow_container">
          <div class="contImg d-flex flex-column">
            <!-- Duplicamos las imágenes para lograr el efecto continuo -->
            <img
              v-for="(image, index) in images"
              :src="image.src"
              :alt="'Imagen ' + (index + 1)"
              :key="'top-' + index"
              class="mb-3"
            />
            <img
              v-for="(image, index) in images"
              :src="image.src"
              :alt="'Imagen ' + (index + 1)"
              :key="'bottom-' + index"
              class="mb-3"
            />
          </div>
        </div>
        <div class="overflow_container">
          <div class="contImg2 d-flex flex-column">
            <img
              v-for="(image, index) in images2"
              :src="image.src"
              :alt="'Imagen ' + (index + 1)"
              :key="'top-' + index"
              class="mb-3"
            />
            <img
              v-for="(image, index) in images2"
              :src="image.src"
              :alt="'Imagen ' + (index + 1)"
              :key="'bottom-' + index"
              class="mb-3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contain {
  margin-top: 75px;
}
.home {
  padding-left: 10px;
  min-height: 100vh;
}

.titulo {
  font-size: 54px;
  font-weight: 550;
}
@media (max-width: 768px) {
  .titulo {
    font-size: 41px;
  }
}
.titulo_span1 {
  color: #ffffff;
}

.container {
  padding: 0;
}
.overflow_container {
  overflow: hidden;
  height: 500px;
  width: 200px;
  padding: 0;
}

.contImg {
  animation: scrollUp 20s linear infinite;
  margin-right: 10px;
}

.contImg2 {
  animation: scrollUp 30s linear infinite;
}

@keyframes scrollUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.boton_redes {
  text-decoration: none;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #1b98f5;
  animation: shake 0.5s ease infinite;
}

.boton_redes:hover {
  transform: translateY(-5px);
  color: #0df4ad;
  animation: none;
}

@keyframes shake {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(8deg);
  }
  75%,
  25% {
    transform: rotate(-8deg);
  }
}

.button_cv {
  background-color: transparent;
}
</style>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      images: [
        { src: "/imagen1.jfif" },
        { src: "/imagen2.jfif" },
        { src: "/imagen3.jfif" },
        { src: "/imagen4.jfif" },
        { src: "/imagen5.jfif" },
      ],
    };
  },
};
</script>

<template>
  <div class="row flex-wrap col-12 justify-content-between mt-2 px-2">
    <div class="col-md-6 py-5">
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
      <div class="d-flex justify-content-between mt-4">
        <button class="button_contact">Contáctame</button>
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

    <!-- <div>holaaaa</div> -->
    <!-- <div class="d-flex justify-content-end"> -->
    <div class="container col-md-6">
      <div class="row flex-nowrap col-12 justify-content-center">
        <div class="overflow-container">
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
        <div class="overflow-container">
          <div class="contImg2 d-flex flex-column">
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
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style>
.titulo {
  font-size: 54px;
  font-weight: 550;
}
.titulo_span1 {
  color: #ffffff;
}

/* .titulo_spand2 {
  background: #1b98f5;
  background: linear-gradient(to right, #1b98f5 22%, #0df4ad 75%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
} */

/* overflow: hidden; */
.overflow-container {
  overflow: hidden;
  height: 500px; /* Ajusta la altura según tus necesidades */
  width: 200px;
  padding: 0;
  margin-right: 10px;
}

.contImg {
  animation: scrollUp 20s linear infinite; /* Ajusta la duración de la animación según tus necesidades */
}

.contImg2 {
  animation: scrollUp 30s linear infinite; /* Ajusta la duración de la animación según tus necesidades */
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
</style>

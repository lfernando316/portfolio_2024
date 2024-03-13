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
      <button class="button_contact mt-4">Contáctame</button>
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
  width: 250px;
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
    transform: translateY(
      -50%
    ); /* Ajusta el porcentaje según el número de imágenes y su altura */
  }
}
</style>

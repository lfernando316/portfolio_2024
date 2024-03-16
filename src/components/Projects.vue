<template>
  <div
    class="d-flex flex-column align-items-center justify-content-center"
    id="proyectos"
  >
    <h2 class="fs-1 text-white fw-bold">Proyectos</h2>
    <p class="text-center">
      Entre algunos de mis proyectos donde he aplicado mis habilidades se
      encuentran desarrollos web y pequeñas aplicaciones. <br />
      Cada uno ha sido una oportunidad para aprender y crecer, mejorando mis
      habilidades técnicas y mi capacidad para resolver problemas
    </p>
  </div>
  <div class="container_swiper">
    <swiper
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      @reachEnd="handleSwiperEnd"
    >
      <swiper-slide class="p-5" v-for="image in images" :key="image.src">
        <div class="card">
          <!-- <div class="card-img"> -->
          <img :src="image.src" :alt="image.alt" />
          <!-- </div> -->
          <div class="card-description">
            <div class="card-title">
              <h4>{{ image.title }}</h4>
            </div>
            <p>{{ image.description }}</p>
          </div>
          <div class="card-link d-flex justify-content-center gap-3">
            <div class="">
              <a
                class="text-decoration-none d-flex flex-column"
                target="_blank"
                :href="image.urlProyecto"
              >
                <i class="fa-brands fa-chrome"></i>

                Desplegar <br />
                proyecto
              </a>
            </div>
            <div class="">
              <a
                class="text-decoration-none d-flex flex-column"
                target="_blank"
                :href="image.urlCodigo"
              >
                <i class="fa-brands fa-github"></i>
                Abrir <br />
                código
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ref } from "vue"; // Importamos ref y watch

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      {
        src: "/screenshotrickandmorty.png",
        alt: "imagen_app",
        title: "Rick and Morty app",
        urlCodigo: "https://github.com/lfernando316/apprickandmorty",
        urlProyecto: "https://rickandmortylfsr.netlify.app/",
        description:
          "Aplicación hecha en React utilizando la API de rick and morty",
      },
      {
        src: "/pokeapp.png",
        alt: "imagen_app",
        title: "Poke app",
        urlCodigo: "https://github.com/lfernando316/pokeApp",
        urlProyecto: "https://pokeapplfsr.netlify.app",
        description:
          " Aplicación hecha con React router y Redux consumiendo la API de pokemon",
      },
      {
        src: "/weather_app.png",
        alt: "imagen_app",
        title: "Weather app ",
        urlCodigo: "https://github.com/lfernando316/Weather-App",
        urlProyecto: "https://weather-app-lfsr.netlify.app",
        description:
          "Aplicación hecha en React utilizando una api, genera el clima segun tu ubicación",
      },

      {
        src: "/quoterandom.png",
        alt: "imagen_app",
        title: "Quote Ramdon app",
        urlCodigo: "https://github.com/lfernando316/QuoteRamdon",
        urlProyecto: "https://quoterandomlfsr.netlify.app/",
        description:
          "Aplicación hecha en React utilizando un archivo json, genera frases y colores aleatorios.",
      },

      {
        src: "/bananaburguesa.png",
        alt: "imagen_app",
        title: "Sitio web",
        urlCodigo:
          "https://github.com/lfernando316/BananaBurguesa-luisFernandoSalcedo",
        urlProyecto: "https://bananaburguesa.netlify.app",
        description: "Sitio Web creado con HTML y CSS usando el framework SASS",
      },
      {
        src: "/bananaburguesa.png",
        alt: "Imagen 3",
        title: "Descripción",
        urlCodigo: "https://github.com/lfernando316/Weather-App",
        urlProyecto: "https://weather-app-lfsr.netlify.app",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/bananaburguesa.png",
        alt: "Imagen 3",
        title: "Descripción",
        urlCodigo: "https://github.com/lfernando316/Weather-App",
        urlProyecto: "https://weather-app-lfsr.netlify.app",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
    ];

    const modules = [Navigation];

    let slidesPerView = ref(4);
    let spaceBetween = 10;

    // Función para manejar los cambios en el ancho de la ventana
    const handleWindowResize = () => {
      if (window.innerWidth < 600) {
        slidesPerView.value = 1;
      } else if (window.innerWidth < 1000) {
        slidesPerView.value = 3;
      } else {
        slidesPerView.value = 4;
      }
    };

    // Agregar un event listener para el evento 'resize' de la ventana
    window.addEventListener("resize", handleWindowResize);

    // Llama a la función una vez para establecer el valor inicial
    handleWindowResize();

    const handleSwiperEnd = (swiper) => {
      if (swiper.isEnd) {
        swiper.slideToLoop(0);
      }
    };
    return {
      images,
      modules: [Navigation],
      slidesPerView,
      spaceBetween,
      handleSwiperEnd,
    };
  },
};
</script>

<style>
.container_swiper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center; /* Alinea las tarjetas al centro */
}

.card {
  width: 250px; /* Ancho de cada tarjeta */
  height: 450px;
  margin-right: 10px; /* Espacio entre tarjetas */
  position: relative;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: none;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  overflow-wrap: normal;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.05);
}

.card img {
  width: 100%;
  height: 200px;
  margin: 0; /* Elimina el margen */
  padding: 0;
}

.card-title {
  color: #0df4ad;
}
.card-description {
  padding: 10px;
  color: #acacb5;
}

.card-link {
  text-align: center;
  padding-bottom: 20px;
  padding-bottom: 8px;
}

.card-link a {
  color: #1b98f5;
}

/*  */
</style>

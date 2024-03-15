<template>
  <div class="container">
    <swiper
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      @reachEnd="handleSwiperEnd"
      autoplay
    >
      <swiper-slide v-for="image in images" :key="image.src">
        <div class="card">
          <img :src="image.src" :alt="image.alt" />
          <div class="card-description">
            <div class="card-title">
              <h4>{{ image.title }}</h4>
            </div>
            <p>{{ image.description }}</p>
          </div>
          <div class="card-link">
            <a href="#">Ver más</a>
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
        src: "/imagen1.jfif",
        alt: "Imagen 1",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen2.jfif",
        alt: "Imagen 2",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen3.jfif",
        alt: "Imagen 3",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen4.jfif",
        alt: "Imagen 4",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen2.jfif",
        alt: "Imagen 2",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen3.jfif",
        alt: "Imagen 3",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
      {
        src: "/imagen4.jfif",
        alt: "Imagen 4",
        title: "Descripción",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt animi inventore repellat illo sunt error consequuntur odit ducimus eaque.",
      },
    ];

    const modules = [Navigation];

    let slidesPerView = ref(3);
    let spaceBetween = 20;

    // Función para manejar los cambios en el ancho de la ventana
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        slidesPerView.value = 1;
      } else {
        slidesPerView.value = 3;
      }
    };

    // Agregar un event listener para el evento 'resize' de la ventana
    window.addEventListener("resize", handleWindowResize);

    // Llama a la función una vez para establecer el valor inicial
    handleWindowResize();

    const handleSwiperEnd = (swiper) => {
      // Comprobamos si estamos al final del swiper
      if (swiper.isEnd) {
        // Si estamos al final, intentamos ir al primer slide
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
  // watch: {
  //   "window.innerWidth"() {
  //     console.log("holaa");
  //   },
  // },
};
</script>

<style>
.swiper-container {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center; /* Alinea las tarjetas al centro */
}

.card {
  width: 300px; /* Ancho de cada tarjeta */
  margin-right: 20px; /* Espacio entre tarjetas */
}

.card img {
  width: 100%;
  height: auto;
}

.card-description {
  padding: 20px;
}

.card-link {
  text-align: center;
  padding-bottom: 20px;
}

.card-link a {
  color: blue;
}

/*  */
</style>

<script setup>
import { RouterLink } from "vue-router";

const closeMenu = () => {
  document.getElementById("navbarSupportedContent").classList.remove("show");
};
</script>

<template>
  <nav class="navbar mt-0 ms-0 ps-0 navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">
        <i class="fa-brands fa-dev fa-2x" style="color: #09fca7" />
        LFernando316
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon custom-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav lista_bar me-auto mb-2 mb-lg-0 fs-6 d-flex justify-content-center"
        >
          <li class="nav-item">
            <router-link
              class="nav-link active ms-3"
              to="#habilidades"
              @click="closeMenu"
              >Habilidades</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link active ms-3" href="#certificados"
              >Certificados</a
            >
          </li> -->
          <li class="nav-item">
            <router-link
              class="nav-link active ms-3"
              to="#proyectos"
              @click="closeMenu"
              >Proyectos</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active ms-3"
              to="#contacto"
              @click="closeMenu"
              >Contacto</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.custom-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-toggler:focus {
  box-shadow: 0 0 0 var(--bs-navbar-toggler-focus-width) #0df4ad;
}
.navbar {
  background-color: #06071b;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
}
.lista_bar {
  background-color: #06071b;
}

.navbar-nav .nav-item .nav-link {
  color: #0df4ad; /* Cambio de color del texto del enlace */
}

.custom-toggler-icon:active {
  filter: brightness(0) invert(1); /* Cambiar color del icono cuando está activo */
}
.navbar-nav {
  width: 120%;
  text-align: left;
}

.container-fluid {
  padding-left: 0; /* Eliminar el relleno izquierdo del contenedor */
}
/* Estilos para dispositivos pequeños */
</style>

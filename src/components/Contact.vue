<script>
export default {
  data() {
    return {
      formData: {
        nombre: "",
        correo: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      },
      formAction: "https://formsubmit.co/luiz_fernando316@hotmail.com",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch(this.formAction, {
          method: "POST",
          body: new FormData(document.querySelector("form")),
        });

        if (response.ok) {
          console.log("Formulario enviado con éxito");
        } else {
          console.error("Error al enviar el formulario");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>
<template>
  <div class="content_form" id="contacto">
    <h2 class="d-flex flex-column align-items-center">
      Contáctame <br /><span class="titulo_spand2 fs-2 fw-bold"
        >para Conocerme
      </span>
    </h2>
    <p class="px-5">
      Escríbeme si deseas contáctarme, si tienes algún proyecto en mente o
      alguna inquietud, no dudes en llenar este formulario. estoy interesado en
      realizar proyectos como freelance y recibir oportunidades laborales.
    </p>
    <div class="d-flex flex-wrap align-items-center">
      <form
        :action="formAction"
        method="POST"
        @submit="handleSubmit"
        class="row col-md-6 gap-2 ps-5"
      >
        <div class="pe-5">
          <input
            type="text"
            class="form_control col-md-12"
            id="nombre"
            name="nombre"
            v-model="formData.nombre"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="pe-5">
          <input
            type="tel"
            class="form_control col-md-12"
            id="telefono"
            name="telefono"
            v-model="formData.telefono"
            placeholder="Teléfono"
          />
        </div>
        <div class="pe-5">
          <input
            type="email"
            class="form_control col-md-12"
            id="correo"
            name="correo"
            v-model="formData.correo"
            placeholder="Correo electrónico"
            required
          />
        </div>

        <div class="pe-5">
          <input
            type="text"
            class="form_control col-md-12"
            id="asunto"
            name="asunto"
            v-model="formData.asunto"
            placeholder="Asunto"
            required
          />
        </div>
        <div class="pe-5">
          <textarea
            class="form_control col-md-12"
            id="mensaje"
            name="mensaje"
            rows="3"
            v-model="formData.mensaje"
            placeholder="Mensaje"
          ></textarea>
        </div>
        <div class="pe-5">
          <button type="submit" class="button_contact mt-2">Enviar</button>
        </div>
      </form>
      <!-- <div class="row flex-column justify-content-start ms-5 gap-4 fs-5"> -->
      <div class="row px-5 pt-2 col-md-6 gap-4 align-self-baseline">
        <!-- <div class=""> -->
        <a
          target="_blank"
          href="https://wa.me/message/F74B2XUM7BXCP1"
          class="text-decoration-none text-white round_botton"
        >
          <i class="fa-brands fa-whatsapp" />
          Teléfono: +573026685405</a
        >
        <!-- </div> -->
        <!-- <div class="p-0"> -->
        <a
          target="_blank"
          href="mailto: luiz_fernando316@hotmail.com"
          class="text-decoration-none text-white round_botton"
          ><i class="fa-solid fa-envelope" /> Correo:
          luiz_fernando316@hotmail.com</a
        >
        <!-- </div> -->
        <!-- <div> -->
        <div class="round_botton">
          <i class="fa-solid fa-location-dot"></i> Bucaramanga, Colombia
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style>
/* .content_form {
  width: 350px;
  border: 3px;
  border-radius: 10px;
  background-color: white;
} */
.no-padding {
  padding: 0;
}
.content_form {
  width: 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: #ffffff;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  overflow-wrap: normal;
  background-color: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 20px 0;
  display: flex;
  position: relative;
}

.form_control {
  box-shadow: none;
  height: 44px;
  border: 1px solid #0cfca7;
  color: #010b15;
  background-color: rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  align-self: auto;
  margin-bottom: 0;
  padding: 10px 20px;
  transition: border 0.3s ease-in-out;
}
.form_control:focus {
  box-shadow: none;
  height: 44px;
  border: 1px solid #010b15;
  color: #010b15;
  background-color: rgba(255, 255, 255, 0.14);
  border-radius: 6px;
  align-self: auto;
  margin-bottom: 0;
  padding: 10px 20px;
  transition: border 0.3s ease-in-out;
}
.form_control::placeholder {
  color: #ccc; /* Cambia el color del placeholder */
}

.round_botton {
  max-width: 400px;
  padding: 0.5em 2em;
  border: 2px solid #0cfca7;
  border-radius: 2em;
  background: transparent;
  box-shadow: 0px 1px 2px #1b98f5; /* Añade sombra */
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.round_botton:hover {
  opacity: 1;
  background: #00000023;
}
</style>

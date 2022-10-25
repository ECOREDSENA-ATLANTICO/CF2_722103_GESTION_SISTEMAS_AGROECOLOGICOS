<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/arrastrar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Actividad 1
        p.mb-4 Esta actividad trata de relacionar las columnas de términos con su respectiva definición, el objetivo es que el aprendiz haga la correcta unión y de este modo hacer un repaso de lo estudiado.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar coincidencias
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/A/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Actividad 2
        p.mb-4 Complete las frases con el término al que hace referencia.

        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/B/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>

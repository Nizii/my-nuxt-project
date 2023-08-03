<template>
  <div>
    <VideoComponent 
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      description="Onlineausstellung für das Ringier Bildarchiv Aarau während dem Lockdown. Ich habe das Backend mit .Net erstellt und mit Azure. Die Datenbank war MongoDB. Wir waren 2 Designer und 2 Informatiker Frontend und Backend."  
    />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      description="Eine interaktive Weinkarte für Personen die weniger Weinkentnisse haben und Restaurants die sich keinen Someilier Leisten können aber trotzdem ein Weinerlebniss anbieten möchten. Das Team bestand aus mir und einem Designer. Das Frontend habe ich mit Nuxt.js gemacht und das Backend mit .Net. Zudem habe ich mit JWT Tokens gearbeitet."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Erp.mp4" 
      description="Ein ERP System für einen Einmannsanitärbetrieb. Das System ist noch in der Entwicklung. Einzelarbeit. Das Frontend habe ich mit Vue.js und das Backend mit .Net gemacht. Die Datenbank ist MySQL."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      description="Supersonic ist ein Rennspiel wo sich zwei Spieler duelieren. Einerseits das Raumschiff und anderseits der Streckenbauer der versucht das Raumschiff durch Kurven zu zerstören. Das Team bestand aus 3 Informatiker und einem Designer. Ich war verantwortlich für die Physik. Wir haben mit Unity und C# gearbeitet"
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Flametrain.mp4" 
      description="Eine Art Snake ohne das sich der Ballon verlängert. Team zwei Informatiker und ein Designer. Ich war für die Gamelogik verantwortlich. Hier haben wir mit C# und Unity gearbeitet."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Shield.mp4" 
      description="Shield Heroe ein VR Spiel wo man die Gegner mit Schildern besiegt. Dabei können die Schilder wie ein Bumerang geworfen werden oder die Geschosse der Gegner werden reflektiert. Wir waren ein dreier Team von Informatiker. Ich war verantwortlich für die Wurf- und Abwerbewegung der Schilder."
    />
  </div>
</template>

<script>
import VideoComponent from '../Content/VideoComponent.vue'
import Spacer from '../Content/Spacer.vue'

export default {
  components: {
    VideoComponent,
    Spacer,
  }
}
</script>

<style>
  .spacer{
    height: 100px;
  }
</style>

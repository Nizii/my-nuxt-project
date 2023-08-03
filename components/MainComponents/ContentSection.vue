<template>
  <div>
    <VideoComponent 
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      description="Onlineausstellung für das Ringier Bildarchiv Aarau während dem Lockdown. Ich habe das Backend mit .Net erstellt und mit Azure. Die Datenbank war MongoDB. Wir waren 2 Designer und 2 Informatiker (Frontend und Backend)."  
    />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      description="Eine interaktive Weinkarte für Personen, die weniger Weinkenntnisse haben, und für Restaurants, die sich keinen Sommelier leisten können, aber dennoch ein Weinerlebnis anbieten möchten, befindet sich im Entwicklungsprozess. Das Team bestand aus mir und einem Designer. Das Frontend wurde mit Nuxt.js entwickelt, das Backend mit .Net. Zudem habe ich mit JWT Tokens gearbeitet."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Erp.mp4" 
      description="Ein ERP-System für einen Einmann-Sanitärbetrieb befindet sich noch in der Entwicklung. Ich arbeite alleine daran. Das Frontend habe ich mit Vue.js und das Backend mit .Net entwickelt. Als Datenbank verwende ich MySQL."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      description="Supersonic ist ein Rennspiel, bei dem sich zwei Spieler duellieren. Einerseits steuert ein Spieler das Raumschiff und andererseits ist der Streckenbauer, der versucht, das Raumschiff durch Kurven zu zerstören. Das Entwicklerteam bestand aus 3 Informatikern und einem Designer. Ich war für die Physik verantwortlich. Das Spiel wurde mit Unity und C# entwickelt."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Flametrain.mp4" 
      description="Eine Art Snake-Spiel, bei dem sich der Ballon nicht verlängert. Das Entwicklerteam bestand aus zwei Informatikern und einem Designer. Ich war für die Gamelogik verantwortlich. Wir haben das Spiel mit C# und Unity entwickelt."
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Shield.mp4" 
      description="Shield Heroe ist ein VR-Spiel, bei dem man die Gegner mit Schildern besiegt. Dabei können die Schilder wie Bumerangs geworfen werden oder die Geschosse der Gegner werden reflektiert. Das Entwicklerteam bestand aus drei Informatikern. Ich war für die Wurf- und Abwerbewegung der Schilder verantwortlich."
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

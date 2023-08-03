<template>
  <div>
    <VideoComponent 
      title="Ringier Bildarchiv Onlineausstellung"
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      description="."  
    />
    <Spacer/>

    <VideoComponent 
      title="Interaktive Winekarte Mobile Web App"
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      description="Dies ist eine Beschreibung des Videos."
    />
    <Spacer/>

    <VideoComponent 
      title="ERP System für einen Einmannsanitärbetrieb"
      class="project"
      :is-left="false" 
      src="/videos/Erp.mp4" 
      description="Dies ist eine Beschreibung des Videos."
    />
    <Spacer/>

    <VideoComponent 
      title="3D Racing Game"
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      description="Dies ist eine Beschreibung des Videos."
    />
    <Spacer/>

    <VideoComponent 
      title="2D Game Flametrain"
      class="project"
      :is-left="false" 
      src="/videos/Flametrain.mp4" 
      description="Dies ist eine Beschreibung des Videos."
    />
    <Spacer/>
    
    <VideoComponent 
      title="VR Game Shield Hero"
      class="project"
      :is-left="false" 
      src="/videos/Shield.mp4" 
      description="Dies ist eine Beschreibung des Videos."
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

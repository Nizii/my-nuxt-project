<template>
  <div>
    <VideoComponent 
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      description="Dies ist eine Beschreibung des Videos."  
    />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
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

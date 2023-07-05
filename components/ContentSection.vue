<template>
  <div>
    <VideoComponent 
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      description="Dies ist eine Beschreibung des Videos."  
    />

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      description="Dies ist eine Beschreibung des Videos."
    />
  </div>
</template>

<script>
import VideoComponent from './VideoComponent.vue'

export default {
  components: {
    VideoComponent
  }
}
</script>

<style>
  .project{
    margin-bottom: 50px;
  }
</style>

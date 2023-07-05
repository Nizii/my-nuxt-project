<template>
  <div 
    class="project-container" 
    @mouseover="mouseOver" 
    @mouseleave="mouseLeave"
    :class="{'expanded': isExpanded}"
  >
    <div class="project-content" :class="{'slide-from-left': isLeft, 'slide-from-right': !isLeft}">
      <video ref="video" muted>
        <source :src="src" type="video/mp4">
        Ihr Browser unterstützt das Video-Tag nicht.
      </video>
      <button v-if="isMuted" @click="unmute" class="unmute-button">Unmute</button>
      <div class="video-description" :class="{'fade-in-delay': isLeft || !isLeft}">{{ description }}</div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'isLeft', 'description'],
  data() {
    return {
      timeout: null,
      isExpanded: false,
      isMuted: true
    };
  },
  methods: {
    mouseOver() {
      this.isExpanded = true;
      this.timeout = setTimeout(() => {
        this.$refs.video.play().catch(error => {
          console.error('Fehler beim Abspielen des Videos:', error);
        });
      }, 1);
    },
    mouseLeave() {
      this.isExpanded = false;
      clearTimeout(this.timeout);
      this.$refs.video.pause();
    },
    unmute() {
      this.$refs.video.muted = false;
      this.isMuted = false;
    }
  },
}
</script>

<style>
  .project-container {
    position: relative; 
    width: 40%;
    aspect-ratio: 19 / 9;
    margin: auto;
    transition: all 0.5s ease;
  }

  .project-container.expanded {
    width: 60%;
  }

  .project-content {
    width: 100%;
    height: 100%;
  }

  .unmute-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .project-content video {
    width: 100%;
    height: 100%;
  }

  .video-description {
    width: 100%;
    padding: 10px;
    color: black;
    opacity: 0;
    transition: opacity 2s;
  }

  .fade-in-delay {
    animation: fadeIn 2s forwards;
    animation-delay: 2s;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .slide-from-left {
    animation: slideFromLeft 2s forwards;
  }

  .slide-from-right {
    animation: slideFromRight 2s forwards;
  }

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
  
  @keyframes slideFromRight {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }
    100% {
      transform: translateX(0%);
      opacity: 1;
    }
  }
</style>

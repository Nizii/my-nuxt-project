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
      <img v-if="isMuted" @click="unmute" class="unmute-button" src="~/static/icons/mute.png" alt="Unmute Icon" />
      <div class="video-description" :class="{'fade-in-delay': isLeft || !isLeft}">{{ description }}</div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['src', 'isLeft', 'description', 'title'],
  data() {
    return {
      timeout: null,
      isExpanded: false,
      isMuted: true,
      isAnimating: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isAnimating = false;
    }, 2000);
  },
  methods: {
    mouseOver() {
      if (!this.isAnimating) { 
        this.isExpanded = true;
        this.timeout = setTimeout(() => {
          this.$refs.video.play().catch(error => {
            console.error('Fehler beim Abspielen des Videos:', error);
          });
        }, 1);
      }
    },
    mouseLeave() {
      if (!this.isAnimating) {
        this.isExpanded = false;
        clearTimeout(this.timeout);
        this.$refs.video.pause();
      }
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
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;
  }

  .project-container.expanded {
    width: 60%;
  }

  .project-container.animating {
    animation: none !important; 
    /* Verhindert, dass die .expanded Klasse während der Animation wirksam wird */
  }

  .project-container.expanded:not(.animating) {
    width: 60%; 
    /*Stellt sicher, dass die .expanded Klasse nur wirksam wird, wenn die Animation abgeschlossen ist */
  }

  .project-content {
    display: flex; 
    flex-direction: column;
    width: 100%;
    height: auto; 
    align-items: center;
  }

  .unmute-button {
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(45% - 25px);
    left: calc(50% - 25px);
  }

  .project-content video {
    width: 100%;
    aspect-ratio: 16 / 9; 
  }

  .video-description {
    width: 100%;
    padding: 10px;
    color: black;
    opacity: 0;
    transition: opacity 2s;
    align-self: flex-start;
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

<template>
  <div 
    class="project-container" 
    @mouseover="mouseOver" 
    @mouseleave="mouseLeave"
    :class="{'expanded': isMobile ? false : isExpanded}"
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
      isMobile: window.innerWidth <= 600,
    };
  },
  mounted() {
    if (!this.isMobile) {
      setTimeout(() => {
        this.isAnimating = false;
      }, 2000);
    }
  },
  methods: {
    mouseOver() {
      if (!this.isAnimating && !this.isMobile) { 
        this.isExpanded = true;
        this.timeout = setTimeout(() => {
          this.$refs.video.play().catch(error => {
            console.error('Fehler beim Abspielen des Videos:', error);
          });
        }, 1);
      }
    },
    mouseLeave() {
      if (!this.isAnimating && !this.isMobile) {
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
  }

  .project-container.expanded:not(.animating) {
    width: 60%;
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

  .slide-from-left,
  .slide-from-right {
    animation: slideFromLeft 2s forwards;
  }

  @media only screen and (max-width: 600px) {
    .project-container,
    .project-container.expanded {
      width: 100%;
    }

    .project-content {
      flex-direction: column;
    }

    .project-content video {
      aspect-ratio: auto;
    }

    .video-description {
      width: 100%;
      transition: none;
      opacity: 1;
    }

    .slide-from-left,
    .slide-from-right {
      animation: none;
      transform: translateX(0%);
      opacity: 1;
    }
  }
</style>

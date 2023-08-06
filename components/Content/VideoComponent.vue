<template>
  <div 
    class="project-container" 
    @click="toggleVideo"
    :class="{'expanded': isMobile ? false : isExpanded}"
  >
    <div class="project-content" :class="{'slide-from-left': isLeft, 'slide-from-right': !isLeft}">
      <div class="video-title" :class="{'fade-in': !isAnimating}"><b>{{ title }}</b></div>
      <div class="video-wrapper">
        <video ref="video" :muted="isMuted" @play="videoPlayed" @pause="videoPaused">
          <source :src="src" type="video/mp4">
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
        <img v-if="isPaused" @click="playVideo" class="play-button" src="~/static/icons/play.png" alt="Play Icon" />
        <img v-if="isMuted && !isPaused" @click="unmute" class="unmute-button" src="~/static/icons/mute.png" alt="Unmute Icon" />
      </div>
      <div class="video-description" :class="{'fade-in': !isAnimating}">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src', 'isLeft', 'description', 'title'],
  data() {
    return {
      isExpanded: false,
      isMuted: true,
      isPaused: true,
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
    this.$root.$on('videoPlaying', this.pauseVideo);
  },
  beforeDestroy() {
    this.$root.$off('videoPlaying', this.pauseVideo);
  },
  methods: {
    toggleVideo() {
      if (this.isPaused) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    },
    playVideo(event) {
      if (event) event.stopPropagation();

      this.$root.$emit('videoPlaying');
      this.$refs.video.play().then(() => {
        this.isPaused = false;
      }).catch(error => {
        console.error('Fehler beim Abspielen des Videos:', error);
      });
    },
    videoPlayed() {
      this.isPaused = false;
    },
    videoPaused() {
      this.isPaused = true;
    },
    unmute(event) {
      event.stopPropagation();
      this.isMuted = false;
    },
    pauseVideo() {
      this.$refs.video.pause();
      this.isPaused = true;
    }
  },
}
</script>



<style>
  .project-container {
    position: relative; 
    width: 60%;
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

  .video-wrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; 
    background-color: black;
  }
  
  .video-wrapper video {
    width: 100%;
    height: 100%;
  }

  .unmute-button, .play-button {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .project-content video {
    width: 100%;
    aspect-ratio: 16 / 9; 
  }
  .video-description {
    width: 100%;
    padding-top: 10px;
    color: black;
    text-align: justify;
  }

  .video-title{
    width: 100%;
    color: black;
    font-size: 30px;
  }

  .fade-in {
    opacity: 1;
  }

  .fade-in-delay {
    animation: fadeIn 2s forwards;
    animation-delay: 2s;
  }

  .slide-from-left,
  .slide-from-right {
    animation: slideFromLeft 2s forwards;
  }

  @media only screen and (max-width: 1024px) {
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

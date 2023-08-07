<template>
  <div 
    class="project-container" 
    @click="toggleVideo"
    :class="{'expanded': isMobile ? false : isExpanded}"
  >
    <div class="project-content" :class="{'slide-from-left': isLeft, 'slide-from-right': !isLeft}">
      <div class="video-title" :class="{'fade-in': !isAnimating}"><b>{{ title }}</b></div>
      <div class="video-tech" :class="{'fade-in': !isAnimating}">{{ tech }}</div>
      <div class="video-wrapper">
        <video ref="video" @play="videoPlayed" @pause="videoPaused" loop>
          <source :src="src" type="video/mp4">
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
        <img v-if="isPaused" @click="playVideo" class="play-button" src="~/static/icons/play.png" alt="Play Icon" />
      </div>
      <div class="video-description" :class="{'fade-in': !isAnimating}">{{ description }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ['src', 'isLeft', 'description', 'title', 'tech', 'videoname'],
  data() {
    return {
      isExpanded: false,
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

        axios.post('/netlify/functions/increment', 
        JSON.stringify({ videoname: this.videoname }), 
        { headers: { 'Content-Type': 'application/json' }})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });

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
    pauseVideo() {
      this.$refs.video.pause();
      this.isPaused = true;
    }
  },
}
</script>



<style>
  *{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }

  .project-container {
    position: relative; 
    width: 55%;
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;
  }

  .project-container.expanded {
    width: 55%;
  }

  .project-container.animating {
    animation: none !important;
  }

  .project-container.expanded:not(.animating) {
    width: 55%;
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
    text-align: left;
  }

  .video-tech{
    width: 100%;
    color: black;
    text-align: left;
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

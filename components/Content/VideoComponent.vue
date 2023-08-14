<template>
  <div 
    class="project-container" 
    :class="{'expanded': isMobile ? false : isExpanded}"
    :style="{ backgroundColor: color }"
  >
    <div class="project-content" :class="{'slide-from-left': isLeft, 'slide-from-right': !isLeft}">
      
      <div 
      class="category-title" 
      :style="{ color: titelcolor }">
        {{ datavideoname }}
      </div>

      <div 
      class="video-title" 
      :class="{'fade-in': !isAnimating}"
      :style="{ titelcolor : 'black' }"
      ><b>{{ title }}</b></div>
      
      <div class="video-wrapper">
        <video ref="video" @play="videoPlayed" @pause="videoPaused" loop :poster="preview" @click="toggleVideo">
          <source :src="src" type="video/mp4">
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
        <img v-if="isPaused" @click="playVideo" class="play-button" src="~/static/icons/play.png" alt="Play Icon" />
        <img @click="toggleFullscreen" src="~/static/icons/fullscreen.png"  class="fullscreen-button"/>
      </div>
      <div class="video-description" :class="{'fade-in': !isAnimating}">{{ description }}</div>
      <div class="video-tech" :class="{'fade-in': !isAnimating}">{{ tech }}</div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
  props: ['src', 'isLeft', 'description', 'title', 'tech', 'videoname', 'preview', 'color', 'titelcolor', 'datavideoname'],
  data() {
    return {
      isExpanded: false,
      isPaused: true,
      isAnimating: true,
      isMobile: false
    };
  },
  mounted() {
    if (!this.isMobile) {
      setTimeout(() => {
        this.isAnimating = false;
      }, 2000);
    }
    this.$root.$on('videoPlaying', this.pauseVideo);
    this.$refs.video.volume = 0.5;
    window.addEventListener('scroll', this.handleScroll);

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
    this.$root.$off('videoPlaying', this.pauseVideo);
  },
  methods: {
    handleScroll() {
        const rect = this.$el.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (isInViewport) {
            this.$emit('videoInView', this.videoname);
            //.$emit('scrollBarChangeColor', this.videoname);
        }
    },
    toggleVideo() {
      if (this.isPaused) {
        this.playVideo();
      } else {
        this.pauseVideo();
      }
    },
    toggleFullscreen() {
      if (this.$refs.video.requestFullscreen) {
        this.$refs.video.requestFullscreen();
      } else if (this.$refs.video.mozRequestFullScreen) { // Firefox
        this.$refs.video.mozRequestFullScreen();
      } else if (this.$refs.video.webkitRequestFullscreen) { // Chrome, Safari & Opera
        this.$refs.video.webkitRequestFullscreen();
      } else if (this.$refs.video.msRequestFullscreen) { // IE/Edge
        this.$refs.video.msRequestFullscreen();
      }
    },
    playVideo(event) {
      const vm = this;
      if (event) event.stopPropagation();

      vm.$root.$emit('videoPlaying');
      vm.$refs.video.play().then(() => {
        vm.isPaused = false;

        axios.post('/.netlify/functions/increment', 
        JSON.stringify({ 'videoname': vm.videoname }),
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
  created() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  },
}
</script>



<style>
  *{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .project-container {
    position: relative; 
    width: 50%;
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 20px;
    padding-top: 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.8);

    /*border-radius: 10px;*/
  }

  .project-container.expanded {
    width: 50%;
  }

  .project-container.animating {
    animation: none !important;
  }

  .project-container.expanded:not(.animating) {
    width: 50%;
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

  .play-button {
    position: absolute;
    width: 70px;
    height: 70px;
    top: 50%;
    left: 50%;
    opacity: 0.8;
    transform: translate(-50%, -50%);
    background-color: rgb(252, 117, 68);
    -webkit-mask: url(~/static/icons/play.png) no-repeat center;
    mask: url(~/static/icons/play.png) no-repeat center;
    mask-size: cover;
    transition: transform 0.3s ease;
  }

  .play-button:hover {
    transform: translate(-50%, -50%) scale(1.1);
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
    font-size: 20px;
  }

  .video-tech{
    width: 100%;
    color: black;
    text-align: left;
    font-size: 20px;
    margin-top: 20px;
  }

  .video-title{
    width: 100%;
    color: black;
    font-size: 40px;
    text-align: left;
    padding-bottom: 10px;
  }

  .category-title{
    display: none;
    width: 100%;
    font-size: 40px;
    text-align: left;
    font-weight: bold;
    
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

  .fullscreen-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    opacity: 0.6;
    background-image: url(~/static/icons/fullscreen.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.3s ease;
  }
  
  .fullscreen-button:hover {
    opacity: 1;
  }

  @media (min-width: 1024px) and (max-height: 1080px) and (max-width: 1920px){
    .video-title{
      font-size: 25px;
    }

    .category-title{
      display: none;
    }

    .video-tech{
      font-size: 15px;
    }

    .video-description {
      font-size: 15px;
    }
  }

  @media (min-width: 2560px) {
    .project-container {
      width: 30%;
    }

    .category-title{
      display: none;
    }
  }

  /*
  @media (min-width: 1080px) {
    .video-title{
      color: white;
    }

    .video-tech{
      color: white;
    }

    .video-description {
      color: white;
    }
  }
  */

  @media only screen and (max-width: 1024px) {
    .category-title{
      display:block;
    }

    .video-title{
      width: 100%;
      color: black;
      font-size: 50px;
      text-align: left;
      font-weight: bold;
    }

    .video-tech{
      width: 100%;
      color: black;
      text-align: left;
      font-size: 25px;
    }

    .video-description {
      width: 100%;
      padding-top: 10px;
      color: black;
      text-align: left;
      font-size: 25px;
    }

    .project-container,
    .project-container.expanded {
      width: 100%;
      padding: 0;
      border-radius: 0px;
      background-color: white !important;
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

  @media only screen and (max-width: 600px) {

    .video-title{
      font-weight: bold;
      width: 100%;
      color: black;
      font-size: 25px;
      text-align: left;
    }

    .video-tech{
      width: 100%;
      color: black;
      text-align: left;
      font-size: 15px;
    }

    .video-description {
      width: 100%;
      padding-top: 10px;
      color: black;
      text-align: left;
      font-size: 15px;
    }

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

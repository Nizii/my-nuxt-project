<template>
  <div 
    class="project-container" 
    @click="toggleVideo"
    @mouseover="mouseOver" 
    @mouseleave="mouseLeave"
    :class="{'expanded': isMobile ? false : isExpanded}"
  >
    <div class="project-content" :class="{'slide-from-left': isLeft, 'slide-from-right': !isLeft}">
      <div class="video-wrapper">
        <video ref="video" :muted="isMuted">
          <source :src="src" type="video/mp4">
          Ihr Browser unterstützt das Video-Tag nicht.
        </video>
        <img v-if="isMobile && $refs.video && $refs.video.paused" @click="playVideo" class="play-button" src="~/static/icons/play.png" alt="Play Icon" />
        <img v-if="isMuted && $refs.video && !$refs.video.paused" @click="unmute" class="unmute-button" src="~/static/icons/mute.png" alt="Unmute Icon" />
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
      if (this.isMobile) {
        this.playVideo();
      } else {
        this.mouseOver();
      }
    },
    playVideo() {
      if (this.$refs.video.paused) {
        this.$root.$emit('videoPlaying');
        this.$refs.video.play().catch(error => {
          console.error('Fehler beim Abspielen des Videos:', error);
        });
      } else {
        this.pauseVideo();
      }
    },
    unmute(event) {
      event.stopPropagation();
      this.isMuted = false;
    },
    pauseVideo() {
      if (!this.$refs.video.paused) {
        this.$refs.video.pause();
      }
    },
    mouseOver() {
      if (!this.isAnimating && !this.isMobile) { 
        this.isExpanded = true;
        this.playVideo();
      }
    },
    mouseLeave() {
      if (!this.isAnimating && !this.isMobile) {
        this.isExpanded = false;
        this.pauseVideo();
      }
    },
  },
}
</script>
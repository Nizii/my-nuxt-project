<template>
  <div class="video-section" ref="videoSection">
    <div class="video-name-display" :style="{ color: getVideoNameDisplayColor() }">
      <p v-if="currentVideoName">{{ currentVideoName }}</p>
    </div>
    <VideoComponent 
      id="first-video"
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      :description="descriptions['Archiv']"
      :tech="'.Net, Vue.js, MongoDB, Azure, Figma'"
      :title="'Stadtmuseum  Aarau'"
      :videoname="'Bildarchiv'"
      :preview="'/previews/archiv.png'"
      :datavideoname="'Web'"
      @videoInView="setCurrentVideoName('Web')"
      :color="'#FFA4A2'"
      :titelcolor="'coral'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      :description="descriptions['Wine']"
      :tech="'.Net, nuxt.js, MongoDB, JWT, BCrypt, Azure, Figma'"
      :title="'Interaktive Weinkarte'"
      :videoname="'Wine'"
      :preview="'/previews/wine.png'"
      :datavideoname="'Web'"
      @videoInView="setCurrentVideoName('Web')"
      :color="'#FFA4A2'"
      :titelcolor="'coral'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Erp.mp4" 
      :description="descriptions['Erp']"
      :tech="'.Net, Vue.js, MySQL, Azure, Figma'"
      :title="'ERP System'"
      :videoname="'Erp'"
      :preview="'/previews/erp.png'"
      :datavideoname="'Web'"
      @videoInView="setCurrentVideoName('Web')"
      :color="'#FFA4A2'"
      :titelcolor="'coral'"
      />
    <Spacer/>  

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Bot.mp4" 
      :description="descriptions['Bot']"
      :tech="'Python, MySQL'"
      :title="'Trading Bitcoin Bot'"
      :videoname="'Bot'"
      :preview="'/previews/bot.png'"
      :datavideoname="'Web'"
      @videoInView="setCurrentVideoName('Web')"
      :color="'#FFA4A2'"
      :titelcolor="'coral'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/UXPrototyp.mp4" 
      :description="descriptions['Ux']"
      :tech="'Figma'"
      :title="'UX Projekt: Aufklärung'"
      :videoname="'Ux'"
      :preview="'/previews/ux.png'"
      :datavideoname="'UX'"
      @videoInView="setCurrentVideoName('UX')"
      :color="'#D7A9E3'"
      :titelcolor="'violet'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Shield.mp4" 
      :description="descriptions['Shield']"
      :tech="'C#, Unity'"
      :title="'Shield Hero VR'"
      :videoname="'Shield'"
      :preview="'/previews/shield.png'"
      :datavideoname="'Game'"
      @videoInView="setCurrentVideoName('Game')"
      :color="'#A8D5BA'"
      :titelcolor="'green'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      :description="descriptions['Supersonic']"
      :tech="'C#, Unity'"
      :title="'Supersonic Bridge Racer'"
      :videoname="'Supersonic'"
      :preview="'/previews/supersonic.png'"
      :datavideoname="'Game'"
      @videoInView="setCurrentVideoName('Game')"
      :color="'#A8D5BA'"
      :titelcolor="'green'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Flametrain.mp4" 
      :description="descriptions['Flame']"
      :tech="'C#, Unity'"
      :title="'Flametrain 2D'"
      :videoname="'Flametrain'"
      :preview="'/previews/flame.png'"
      :datavideoname="'Game'"
      @videoInView="setCurrentVideoName('Game')"
      :color="'#A8D5BA'"
      :titelcolor="'green'"
      />
    <Spacer/>

  </div>
</template>

<script>
import VideoComponent from '~/components/Content/VideoComponent.vue'
import Spacer from '~/components/Content/Spacer.vue'

export default {
  components: {
    VideoComponent,
    Spacer,
  },
  data() {
    return {
      currentVideoName: '',
      descriptions: {
      'Wine': '',
      'Erp': '',
      'Archiv': '',
      'Flame': '',
      'Supersonic': '',
      'Shield': '',
      'Bot': '',
      'Ux': ''
      },
    };
  },
  created() {
    this.loadDescriptions();
  },
  watch: {
      currentVideoName(newVal) {
          this.$emit('update-category-color', newVal);
      }
  },
  methods: {
    setCurrentVideoName(videoName) {
      this.$emit('update-category-color', videoName);
      this.currentVideoName = videoName;
    },
    async loadDescriptions() {
      const files = ['Wine', 'Erp', 'Archiv', 'Flame', 'Supersonic', 'Shield', 'Bot', 'Ux'];
      for (const file of files) {
        const response = await fetch(`/${file}.txt`);
        if (!response.ok) {
          console.error(`Failed to fetch /${file}.txt: ${response.status}`);
          continue;
        }
        const text = await response.text();
        this.descriptions[file] = text;
      }
    },
    updateFirstVideo() {
      const firstVideo = this.$refs.videoSection.querySelector('#first-video');
      const rect = firstVideo.getBoundingClientRect();

      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        this.currentVideoName = 'Web';
        return true;
      }
      return false;
    },
    updateCurrentVideo() {
      if (this.updateFirstVideo()) return;

      const videos = this.$refs.videoSection.querySelectorAll('.project:not(#first-video)'); 
      let newVideoName = null;

      for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const rect = video.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          newVideoName = video.getAttribute('data-videoname');
          break;
        }
      }

      // Überprüfen Sie das Ende des letzten Videos
      const lastVideoRect = videos[videos.length - 1].getBoundingClientRect();
      if (lastVideoRect.bottom <= 0) {
        this.currentVideoName = '';
        return;
      }

      const headerRect = this.$parent.$refs.headerSection.$el.getBoundingClientRect();
      if (headerRect.bottom > 0) {
        this.currentVideoName = '';
      } else if (newVideoName) {
        this.currentVideoName = newVideoName;
      }
    },



    getVideoNameDisplayColor() {
      switch (this.currentVideoName) {
        case 'Web':
          return '#FFA4A2';
        case 'UX':
          return '#D7A9E3';
        case 'Game':
          return '#A8D5BA';
        default:
          return 'black';// Standardfarbe
      }
    },

  },
  mounted() {
    this.loadDescriptions();
    window.addEventListener('scroll', this.updateCurrentVideo);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.updateCurrentVideo);
  },

}
</script>

<style>

.video-section{
}

.video-name-display{
  margin-left: 3%;
  font-size: 50px;
  font-weight: bold;
}

.spacer{
  height: 200px;
}

.video-name-display {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white; 
  padding: 5px 10px;
  color: black;
}

@media (max-width: 1024px) {
  .video-name-display {
    display: none;
  }
}


@media (min-width: 1025px) {
  /*
  .project {
    position: relative;
    transition: transform 0.3s ease;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
  
  .project::before, 
  .project::after,
  .project > div::before,
  .project > div::after { 
      content: "";
      position: absolute;
      background-color: coral;
      transition: all 0.5s ease-in-out;
  }
  
  .project::before {
      top: 0;
      left: 0;
      right: 0;
      height: 5px;
      width: 0;
  }
  
  .project::after {
      bottom: 0;
      left: 0;
      right: 0;
      height: 5px;
      width: 0;
  }
  
  .project > div::before {
      top: 0;
      bottom: 0;
      left: 0;
      width: 5px;
      height: 0;
  }
  
  .project > div::after {
      top: 0;
      bottom: 0;
      right: 0;
      width: 5px;
      height: 0;
  }
  
  .project:hover::before {
      width: 100%;
  }
  
  .project:hover::after {
      width: 100%;
  }
  
  .project:hover > div::before {
      height: 100%;
  }
  
  .project:hover > div::after {
      height: 100%;
  }
  */
  
}

.video-name-display {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  padding: 5px 10px;
  color: black;
}
.video-name-display[color="coral"] {
  color: coral;
}
.video-name-display[color="violet"] {
  color: violet;
}
.video-name-display[color="green"] {
  color: rgb(141, 255, 141);
}
</style>

<template>
  <div>
    <VideoComponent 
      id="first-video"
      class="project"
      :is-left="true" 
      src="/videos/Bildarchiv.mp4" 
      :description="descriptions['Archiv']"
      :tech="'.Net, Vue.js, MongoDB, Azure'"
      :title="'Web'"
      :videoname="'Bildarchiv'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      :description="descriptions['Wine']"
      :tech="'.Net, nuxt.js, MongoDB, Azure'"
      :title="'Web'"
      :videoname="'Wine'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Erp.mp4" 
      :description="descriptions['Erp']"
      :tech="'.Net, Vue.js, MySQL, Azure'"
      :title="'Web'"
      :videoname="'Erp'"
      />
    <Spacer/>  

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Bot.mp4" 
      :description="descriptions['Bot']"
      :tech="'Python, MySQL'"
      :title="'Trading'"
      :videoname="'Bot'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/UXPrototyp.mp4" 
      :description="descriptions['Ux']"
      :tech="'Figma'"
      :title="'UX'"
      :videoname="'Ux'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Shield.mp4" 
      :description="descriptions['Shield']"
      :tech="'C#, Unity'"
      :title="'Game'"
      :videoname="'Shield'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Supersonic.mp4" 
      :description="descriptions['Supersonic']"
      :tech="'C#, Unity'"
      :title="'Game'"
      :videoname="'Supersonic'"
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Flametrain.mp4" 
      :description="descriptions['Flame']"
      :tech="'C#, Unity'"
      :title="'Game'"
      :videoname="'Flametrain'"
      />
    <Spacer/>

  </div>
</template>

<script>
import VideoComponent from '../Content/VideoComponent.vue'
import Spacer from '../Content/Spacer.vue'

export default {
  components: {
    VideoComponent,
    Spacer,
  },
  data() {
    return {
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
  methods: {
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
    }
  },
}
</script>

<style>
  .spacer{
    height: 200px;
  }
</style>

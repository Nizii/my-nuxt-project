<template>
  <div>
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
      />
    <Spacer/>

    <VideoComponent 
      class="project"
      :is-left="false" 
      src="/videos/Wine.mp4" 
      :description="descriptions['Wine']"
      :tech="'.Net, nuxt.js, MongoDB, Azure, Figma'"
      :title="'Interaktive Weinkarte'"
      :videoname="'Wine'"
      :preview="'/previews/wine.png'"
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

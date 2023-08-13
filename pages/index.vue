<template>
  <div>
    <div class="scroll-progress-bar" :style="{ height: progressBarHeight }"></div>
    <HeaderSection/>
    <ContentSection/>
    <BottomSection/>
    <spacer/>
    <spacer/>
  </div>
</template>

<script>
import HeaderSection from '~/components/MainComponents/HeaderSection.vue';
import ContentSection from '~/components/MainComponents/ContentSection.vue';
import BottomSection from '~/components/MainComponents/BottomSection.vue';
import Spacer from '~/components/Content/Spacer.vue';

export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    ContentSection,
    BottomSection,
    Spacer,
  },
  data() {
    return {
      progressBarHeight: '0%',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.updateProgressBar);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateProgressBar);
  },
  methods: {
    updateProgressBar() {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      this.progressBarHeight = `${(scrollPosition / totalHeight) * 100}%`;
    }
  }
}
</script>

<style>
.scroll-progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 20px;  
  background-color: rgb(255, 147, 108);
  z-index: 1000;
  transition: height 0.2s ease;
}
@media (max-width: 1024px) {
  .scroll-progress-bar {
    bottom: 0;
    width: 5px;  
    background-color: rgb(255, 147, 108);
  }
}
</style>
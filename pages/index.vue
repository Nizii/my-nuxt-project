<template>
  <div>
    <div class="scroll-progress-bar" :style="{ height: progressBarHeight, backgroundColor: currentCategoryColor }"></div>
    <HeaderSection ref="headerSection"/>
    <ContentSection ref="contentSection" @update-category-color="updateCategoryColor"/>
    <BottomSection ref="bottomSection"/>
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
      currentCategoryColor: 'rgb(255, 147, 108)'
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
    },
    updateCategoryColor(videoName) {
      switch (videoName) {
        case 'Web':
          if (window.innerWidth <= 1024) {
            this.currentCategoryColor = 'coral';
          } else {
            this.currentCategoryColor = '#FFA4A2';
          }
          break;
        case 'UX':
          if (window.innerWidth <= 1024) {
            this.currentCategoryColor = 'violet';
          } else {
            this.currentCategoryColor = '#D7A9E3';
          }
          break;
        case 'Game':
          if (window.innerWidth <= 1024) {
            this.currentCategoryColor = 'green';
          } else {
            this.currentCategoryColor = '#A8D5BA';
          }
          break;
        default:
          this.currentCategoryColor = 'rgb(255, 147, 108)'; // Default color
      }
    }

  }
}
</script>

<style>
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;  
  z-index: 1000;
  transition: height 0.2s ease;
}
@media (max-width: 1024px) {
  .scroll-progress-bar {
    bottom: 0;
    width: 8px;  
  }
}
</style>
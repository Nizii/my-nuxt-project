<template>
  <div>
    <HeaderSection/>
    <ContentSection/>
    <BottomSection/>
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue';
import ContentSection from '~/components/ContentSection.vue';
import BottomSection from '~/components/BottomSection.vue';
export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    ContentSection,
    BottomSection,
  }
}
</script>

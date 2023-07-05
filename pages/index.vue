<template>
  <div>
    <HeaderSection/>
    <ContentSection/>
  </div>
</template>

<script>
import HeaderSection from '~/components/HeaderSection.vue';
export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    ContentSection,
  }
}
</script>

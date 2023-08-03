<template>
  <div>
    <HeaderSection/>
    <!--<DescriptionSection/>-->
    <ContentSection/>
    <BottomSection/>
  </div>
</template>

<script>
import HeaderSection from '~/components/MainComponents/HeaderSection.vue';
import DescriptionSection from '~/components/MainComponents/DescriptionSection.vue';
import ContentSection from '~/components/MainComponents/ContentSection.vue';
import BottomSection from '~/components/MainComponents/BottomSection.vue';
export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    ContentSection,
    BottomSection,
    DescriptionSection,
  }
}
</script>

<template>
  <div>
    <HeaderSection/>
    <DescriptionSection/>
    <spacer/>
    <spacer/>
    <ContentSection/>
    <BottomSection/>
  </div>
</template>

<script>
import HeaderSection from '~/components/MainComponents/HeaderSection.vue';
import DescriptionSection from '~/components/MainComponents/DescriptionSection.vue';
import ContentSection from '~/components/MainComponents/ContentSection.vue';
import BottomSection from '~/components/MainComponents/BottomSection.vue';
import Spacer from '~/components/Content/Spacer.vue'

export default {
  name: 'IndexPage',
  components: {
    HeaderSection,
    ContentSection,
    BottomSection,
    DescriptionSection,
    Spacer
  }
}
</script>

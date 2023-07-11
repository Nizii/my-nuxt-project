<template>
  <div>
    <p class="my-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
    </p>
    <Spacer/>
  </div>
</template>

<script>
import Spacer from '../Content/Spacer.vue'

export default {
  components: {
    Spacer,
  }
}

</script>


<style>
  .my-description{
    text-align: left;
    font-size: 50px;
    font-weight: bold;
    color: coral;
    font-family: sans-serif;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
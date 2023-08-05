<template>
  <div class="myName">
    <p class="title-name">Nizam Özdemir</p>
    <br>
    <br>
    <br>
    <br>
    <p class="title-desc">Frontend Developer</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .myName{
    height: 100vh;
  }

  .title-name{
    text-align: center;
    font-size: 120px;
    font-weight: bold;
    font-family: sans-serif;
    margin: 10% 0; /* adjust margin as needed */
  }

  .title-desc{
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    font-family: sans-serif;
    margin: 5% 0; /* adjust margin as needed */
  }

  @media only screen and (max-width: 600px) {
    .title-name{
      font-size: 60px; /* adjust font size for mobile */
      margin: 5% 0; /* adjust margin for mobile */
    }

    .title-desc{
      font-size: 30px; /* adjust font size for mobile */
      margin: 2.5% 0; /* adjust margin for mobile */
    }
  }
</style>

<template>
  <div class="bottom-body">
    <a class="to-header" @click="scrollToHeader()">Nach oben zur Startseite</a>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToHeader() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
}
</script>

<style>
  .bottom-body {
    height: 200px;
    text-align: center;
  }

  .to-header {
    font-size: 25px;
    font-family: sans-serif;
    margin: 0 10px;
    text-decoration: none; 
    color: inherit;
    color: rgb(252, 117, 68);
    position: relative;
    overflow: hidden;
    padding: 10px 10px;
    display: inline-block;
    cursor: pointer;
    width: 20%;
    transition: border 0.3s ease-in-out;
  }

  .to-header:hover {
    outline: 2px solid rgb(252, 117, 68);
  }

  .to-header::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgb(252, 117, 68);
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .to-header::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(252, 117, 68);
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  .to-header:hover::before {
    width: 100%;
    visibility: visible;
  }

  .to-header:hover::after {
    height: 100%;
    visibility: visible;
  }
</style>

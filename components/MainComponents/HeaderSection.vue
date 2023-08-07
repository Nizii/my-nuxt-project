<template>
  <div class="myName">
    <p class="title-name">Nizam Can Özdemir</p>
    <p class="title-desc">Bsc Informatik Fokus Digital Ideation</p>
    <div class="navigation">
      <a class="title-txt" id="title-txt-right" @click="scrollToProjects('first-video')">Zu den Projekten</a>
      <a class="title-txt" id="title-txt-left" @click="scrollToProjects('desc-container')">Über mich</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToProjects(target) {
      const element = document.getElementById(target);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
}
</script>

<style>
*{
  text-align: center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.myName{
  height: 100vh;
}

.title-name{
  font-size: 120px;
  font-weight: bold;
  font-family: sans-serif;
  margin-top: 10%;
}

.title-desc{
  font-size: 40px;
  font-weight: bold;
  font-family: sans-serif;
}

.navigation{
  display: flex;
  justify-content: center;
  margin-top: 5%;
}

.title-txt {
  font-size: 30px;
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

.title-txt:hover {
  outline: 2px solid rgb(252, 117, 68);
}

.title-txt::before {
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

.title-txt::after {
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

.title-txt:hover::before {
  width: 100%;
  visibility: visible;
}

.title-txt:hover::after {
  height: 100%;
  visibility: visible;
}

@media only screen and (max-width: 600px) {
  .title-name{
    font-size: 60px;
    margin: 5% 0;
  }

  .title-desc{
    font-size: 30px;
    margin: 2.5% 0;
  }
  .title-txt {
    font-size: 17px;
  }
}
</style>

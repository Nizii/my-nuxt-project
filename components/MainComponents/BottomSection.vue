<template>
  <div class="bottom-body">
    <div class="contact-txt">
      <p>
        <b>Interesse geweckt?</b>
      </p>
      <p>
        Kontaktieren sie mich per Mail: nizam.oezdemir@gmx.ch
      </p>
      <p id="tel-txt">
        Oder telefonisch unter: 076 404 01 68
      </p>
    </div>
    <a class="to-header" @click="scrollToHeader()">Zurück zum Anfang</a>
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
  #tel-txt{
    margin-bottom: 150px;
  }

  .bottom-body {
    height: auto;
    text-align: center;
  }

  .contact-txt {
    width: 100%;
    padding-top: 10px;
    color: black;
    text-align: center;
    font-size: 25px;
  }

  .to-header {
    font-size: 25px;
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
    margin-bottom: 100px;
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

  @media (min-width: 1024px) and (max-height: 1080px) and (max-width: 1920px){
    .contact-txt{
      font-size: 15px;
    }

    .to-header{
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .to-header {
      font-size: 25px;
      margin: 0 10px;
      text-decoration: none; 
      color: inherit;
      color: rgb(252, 117, 68);
      position: relative;
      overflow: hidden;
      padding: 10px 10px;
      display: inline-block;
      cursor: pointer;
      width: 50%;
      transition: border 0.3s ease-in-out;
      margin-bottom: 100px;
    }

    .contact-txt {
      width: 100%;
      padding-top: 10px;
      color: black;
      text-align: center;
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 600px) {
    .to-header {
      font-size: 25px;
      margin: 0 10px;
      text-decoration: none; 
      color: inherit;
      color: rgb(252, 117, 68);
      position: relative;
      overflow: hidden;
      padding: 10px 10px;
      display: inline-block;
      cursor: pointer;
      width: 90%;
      transition: border 0.3s ease-in-out;
      margin-bottom: 100px;
    }

    .contact-txt {
      width: 100%;
      padding-top: 10px;
      color: black;
      text-align: left;
      font-size: 17px;
    }
  }
</style>

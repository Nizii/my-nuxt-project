<template>
  <div id="desc-container">
    <div class="content">
      <div class="about-title-section">
        <nuxt-link to="/" class="about-btn">Zurück</nuxt-link>
        <div class="title-container"> <!-- Neues Container-Element -->
          <p class="about-title-text">
            Über mich
          </p>
        </div>
      </div>
      <div class="about-section">
        <div class="about-text">
          <p>
            Mein Name ist Nizam Can Özdemir, und ich bin 35 Jahre alt.
            Mit dem erfolgreichen Absolvieren meines Studiums bin ich meinem Traumberuf als Softwareentwickler ein Stück näher gekommen.
            Programmieren habe ich vor dem Studium in privaten Projekten gelernt und möchte dies nun auch beruflich tun.
            In meinem Studium habe ich vielfältige Projekte durchgeführt; einige finden Sie unten auf meiner Seite.
            Neben Prototyping habe ich auch fertige Produkte erstellt, wobei mein Schwerpunkt im Frontend mit JavaScript und im Backend mit .Net lag.      
          </p>
          <p>Habe ich Ihr Interesse geweckt? Dann kontaktieren Sie mich auf nizam.oezdemir@gmx.ch oder auf LinkedIn.</p>
        </div>
        <img class="foto" src="~/static/fotos/foto.png">
      </div>
    </div>
    <div class="link-section">
      <a class="about-btn" href="">GitHub</a>
      <a class="about-btn" href="">LinkedIn</a>
    </div>
    <div class="about-bottom"></div>
  </div>
</template>

<style>
  *{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .about-title-text{
    font-size: 40px;
    font-weight: bold;
    font-family: sans-serif;
  }

  .about-btn {
    text-align: center;
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
    width: 25%;
    transition: border 0.3s ease-in-out;
  }
  
  .about-btn:hover {
    outline: 2px solid rgb(252, 117, 68);
  }
  
  .about-btn::before {
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
  
  .about-btn::after {
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
  
  .about-btn:hover::before {
    width: 100%;
    visibility: visible;
  }
  
  .about-btn:hover::after {
    height: 100%;
    visibility: visible;
  }
  #desc-container {
    position: relative;
    width: 55%;
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .about-title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1em;
  }

  .title-container {
    flex-grow: 1; 
    display: flex;
    justify-content: center;
  }

  .about-btn {
    width: auto;
  }
  
  .about-title-text {
    text-align: center;
    width: 100%;
  }

  .about-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .link-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 5em;
    margin-bottom: 3em;
  }
  
  .about-text {
    text-align: left;
    font-size: 25px;
    width: 50%;
  }
  
  .foto {
    height: auto;
    width: 300px;
  }
  
  @media only screen and (max-width: 1024px) {
    #desc-container {
      width: 90%;
    }

    .about-btn{
      font-size: 25px;
    }
  }
  
/* Bestehende Styles bleiben unverändert */

@media only screen and (max-width: 600px) {
  .about-section {
    flex-direction: column;
    width: 100%;
  }
  .about-title-section {
    flex-direction: column;
    align-items: center;
  }
  .about-text {
    width: 100%;
    font-size: 17px;
    text-align: left;
  }
  #desc-container {
    width: 100%;
  }
  .about-btn {
    font-size: 17px;
    margin-bottom: 1em;
  }
  .title-container {
    width: 100%;
  }
  .link-section {
    margin-top: 1em;
    margin-bottom: 1em;
  }
}

</style>

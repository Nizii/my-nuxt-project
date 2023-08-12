<template>
  <div id="desc-container">
      <div class="link-section">
        <nuxt-link to="/" class="about-btn">Home</nuxt-link>
        <a class="about-btn" href="https://github.com/Nizii">GitHub</a>
        <a class="about-btn" href="https://www.linkedin.com/in/nizam-%C3%B6zdemir-12a4b9264/">LinkedIn</a>
      </div>
      <div class="about-section">
        <div class="about-text">
          <p class="about-title-text">
            Über mich
          </p>
          <p>
            Mein Name ist Nizam Can Özdemir, und ich bin 35 Jahre alt.
            Mit dem erfolgreichen Absolvieren meines Studiums bin ich meinem Traumberuf als Softwareentwickler ein Stück näher gekommen.
            Programmieren habe ich vor dem Studium in privaten Projekten gelernt und möchte dies nun auch beruflich tun.
          </p>
            
          <p>
            In meinem Studium habe ich vielfältige Projekte durchgeführt; einige finden Sie unten auf meiner Seite.
            Neben Prototyping habe ich auch fertige Produkte erstellt, wobei mein Schwerpunkt im Frontend mit JavaScript und im Backend mit .Net lag.  
            Die Berücksichtigung von Design Patterns und Clean-Code-Prinzipien wie zum Beispiel SOLID ist für mich selbstverständlich. 
          </p>        
          <p class="about-text-bottom">
          Habe ich Ihr Interesse geweckt? Dann kontaktieren Sie mich auf nizam.oezdemir@gmx.ch oder auf LinkedIn.
          </p>
        </div>
        <img class="foto" src="~/static/fotos/nizi.png">

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
    width: 80%;
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    padding-top: 40px;
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
    text-align: left;
    width: 100%;
  }

  .about-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
  }
  
  .link-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  
  .about-text {
    text-align: left;
    font-size: 25px;
    width: 58%;
    margin-right: 2%;
  }
  
  .foto {
    height: auto;
    width: 40%;
  }

  .about-text-bottom {
    text-align: left;
    font-size: 25px;
    width: 100%;
    margin-top: 2em;
}

@media (min-width: 2560px) {
  #desc-container {
    width: 40%;
  }

  .foto{
    width: 40%;
  }
}

@media (min-width: 1024px) and (max-width: 2559px) {
  #desc-container {
    width: 90%;
  }

  .foto {
    width: 25%;
  }
}

  
@media only screen and (max-width: 1024px) {
  #desc-container {
    width: 90%;
  }
  
  .about-btn{
    font-size: 25px;
  }
}

@media only screen and (max-width: 600px) {
  
  .link-section {
    position: fixed;
    top: 0em;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    padding-top: 10px;
    border-bottom: 0.5px solid rgb(212, 212, 212); 
  }

  .about-title-text{
    text-align: center;
  }

  #desc-container {
    margin-top: 35px;
  }

  .about-btn {
    font-size: 17px;
    padding-bottom: 20px;
  }
  .title-container {
    width: auto;
  }
  .about-section {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .about-text {
    font-size: 17px;
    width: 95%;
    margin-right: 0;
    text-align: left;
  }

  .foto {
    margin: 20px auto;
    width: 95%; 
    max-width: 300px;
  }
  
  .about-text-bottom {
  text-align: left;
  font-size: 17px;
  width: 100%;
  margin-top: 2em;
}
}



</style>

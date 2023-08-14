<template>
  <div id="desc-container">
      <div class="link-section">
        <nuxt-link to="/" class="about-btn">Home</nuxt-link>
        <a class="about-btn" href="https://github.com/Nizii">
          GitHub        
          <!--<img src="~/static/icons/arrowb.png"  class="ext-icon"/>-->
        </a>
        <a class="about-btn" href="https://www.linkedin.com/in/nizam-%C3%B6zdemir-12a4b9264/">
          LinkedIn
          <!--<img src="~/static/icons/arrowb.png"  class="ext-icon"/>-->
        </a>        
      </div>
      <div class="about-section">
        <div class="about-text">
          <p class="about-title-text">
            Über mich
          </p>
          <p>
            Mein Name ist Nizam Özdemir, und ich bin 35 Jahre alt.
            Mit dem erfolgreichen Absolvieren meines Studiums bin ich meinem Traumberuf als Softwareentwickler ein Stück näher gekommen.
            Programmieren habe ich vor dem Studium in privaten Projekten gelernt und möchte dies nun auch beruflich tun. 
            Während meines Studiums habe ich an einer Reihe von Projekten teilgenommen, von denen Sie einige auf meiner Webseite finden. 
            In meiner Freizeit bin ich leidenschaftlicher Fußballspieler im Verein und koche sehr gerne.
          </p>    
          <p>
            Das Wichtigste für mich bei der Arbeit ist ein respektvoller und teamorientierter Umgang miteinander. 
            In meinen Berufsjahren und auch in anderen Bereichen meines privaten Lebens habe ich stets das Motto vertreten: 
            «Im Miteinander liegt Kraft, wo jede Frage ihren Raum hat». 
            Aus meiner Sicht können so dauerhaft gute Leistungen entstehen. 
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

<script>
export default {
  head: {
    title: 'About',
  },
}
</script>

<style>
  *{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .ext-icon{
    width: 15px;
    height: 15px;
  }

  .about-title-text{
    font-size: 40px;
    font-weight: bold;
  }

  .about-btn {
    text-align: center;
    font-size: 25px;
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
    width: 29%;
  }
}

@media (min-width: 1024px) and (max-height: 1080px) and (max-width: 1920px){
  .about-text {
    font-size: 15px;
  }
  
  .about-text-bottom {
    font-size: 15px;
  }

  #desc-container {
    width: 70%;
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
    text-align: left;
  }

  #desc-container {
    margin-top: 25px;
    width: 100%;
    padding: 0;
    padding-top: 20px;
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
    font-size: 15px;
    width: 95%;
    margin-right: 0;
    text-align: left;
  }

  .foto {
    width: 100%; 
  }
  
  .about-text-bottom {
  text-align: left;
  font-size: 15px;
  width: 100%;
  margin-top: 2em;
}
}



</style>

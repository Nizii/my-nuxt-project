<template>
  <div id="desc-container">
    <div class="content">
      <div class="text">
        <p class="my-description">
          Mein Name ist Nizam Can Özdemir, und ich bin 35 Jahre alt.
          Mit dem erfolgreichen Absolvieren meines Studiums bin ich meinem Traumberuf als Softwareentwickler ein Stück näher gekommen.
          Programmieren habe ich vor dem Studium in privaten Projekten gelernt und möchte dies nun auch beruflich tun.
          In meinem Studium habe ich vielfältige Projekte durchgeführt; einige finden Sie unten auf meiner Seite.
          Neben Prototyping habe ich auch fertige Produkte erstellt, wobei mein Schwerpunkt im Frontend mit JavaScript und im Backend mit .Net lag.      
        </p>
        <p class="my-description">Habe ich Ihr Interesse geweckt? Dann kontaktieren Sie mich auf nizam.oezdemir@gmx.ch oder auf LinkedIn.</p>
      </div>
      <img class="foto" src="~/static/fotos/foto.png">
    </div>
  </div>
</template>

<style>
  *{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }

  #desc-container {
    position: relative; 
    width: 55%;
    aspect-ratio: auto;
    margin: auto;
    transition: all 0.5s ease;
    height: 100vh;
  }


  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
  }

  .text {
    font-size: 25px;
  }

  .my-description {
    text-align: left;
    font-family: sans-serif;
    padding-right: 20px;
  }

  .foto {
    height: auto;
    width: 300px;
  }

  @media only screen and (max-width: 1024px) {
    .content {
      flex-direction: column;
    }

    .text {
      width: 100%;
      font-size: 25px;
      text-align: left;
    }

    .foto {
      text-align: center;
    }

    #desc-container {
      width: 100%;
    }
  }
</style>

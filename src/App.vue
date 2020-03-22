<template>
     <!-- main div for the website -->
  <div id="app">
    
    <!-- create the head for the website -->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
    <header>
    <!-- div for the navbar -->
   <div class = "navbar-container">

      <img src = "./assets/Khaled.png" alt = "logo" class = "logo" >


     <!-- navigiation bar -->
      <nav>
        <ul>
          <li> <a href ="#Home">Home </a> </li>
          <li> <a href ="#About">About</a> </li>
          <li> <a href ="#Expereince">Expereience </a> </li>
          <li> <a href ="#Contact">Contact </a> </li>
        </ul>  
      </nav>
    </div>

    </header> <!-- end of the head -->

    <!-- section for the website --> 
    <section class = "section-01" id ="Home">

      <vue-particles class ="vue-particles" color="#0B0C10"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push">
        </vue-particles>

        <!-- text for the Home page -->
        <div class = "main-text">
           <p>Hello , I,m </p> <p class = "myname"> Khaled Elzeiny </p>  <p>I,m full-stack developer / software Engineer </p>
        </div>

        <div class = "About button">
           <button class="home-button"></button>
        </div>
    </section>


 <!-- Section for the About -->
  <section class = " section-01 section-02" id = "About">

      <!-- about title on the about section -->
      <div class = "about-title">
       <p class = "text-01"> About </p>
       
       </div>
      <!-- about postion for the profile -->
      <div class = "about-postion">
      <About class = "about" > </About>
      </div>

      <div class = "progress-bar-postion">
        <ProgressBar > </ProgressBar>
        </div>
    </section>


    <!-- Section for the expereince -->
    <section class = " section-01 section-03" id = "Expereince">

      <div class = "Expereince-postion">
       <p class = "text-01"> Expereince </p>
       </div>

       <Expereience> </Expereience>
    </section>


    <!--Section for the Contact -->
    <section class = " section-01 section-04" id = "Contact">
      <contact class = "contact-postion"> </contact>
    </section>

  </div>  <!-- end of the main div -->

</template>

<script>
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"
import ProgressBar from "./components/ProgressBar.vue"
import Expereience from "./components/Experience.vue"


export default {

 
  name: 'App',

  components:
  {
    About,
    Contact,
    ProgressBar,
    Expereience
  },
}
</script>

<style scooped>

.text-02
{
  margin:0.1%;
}

@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

#app {
  font-family:'Raleway';
  margin: 0;
}
/* header styling */
header
{
  position: absolute;
  top:0;
  left: 0;
  background:none;
  width:100%;
  box-sizing: border-box;
}



/* display header */

header::after
{
  content: '';
  display: table;
  clear: both;
}


/*navbar-container */

.navbar-container
{
  width:90%;
  margin: 0 auto;
}


/* logo styling */
.logo
{
  float:left;
  padding: 10px 10px;
  height: 55px;
}

/* nav bar text postion */
nav
{
  float: right;
}

/* style for each element in the list */
header nav ul
{
  margin:0;
  padding:0;
  display: flex;
}

header nav ul li 
{
  list-style: none;
}

header nav ul li a 
{
  display: inline-block;
  margin-left:70px;
  padding-top:15px;
  position: relative;
}


nav a
{
  color:#FFFAFA;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}
nav a:hover
{
  color: #191919;
}

nav a::before
{
  content: '';
  display: block;
  height: 5px;
  background-color:#191919;

  position: absolute;
  top:0;
  width: 0%;

  transition: all ease-in-out 250ms;

}

nav a:hover::before
{
  width : 100%;
}


/* Section CSS */

/* Section 01 CSS */
.section-01
{
  height:100vh;
  box-sizing: border-box;
  background-color: #F2AA4CFF;
}


.main-text
{
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 180%;
 
}

/* about component postion */

.about-postion
{
  float: left;
  margin-left: 10%;
  margin-top: 6%;
}

/* about main text */
.text-01
{
  margin: 5%;
  font-size: 200%;
  align-items: center;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color:#191919;
}
  
.progress-bar-postion
{
  float:right;
  width: 50%;
  margin-right: 3%;
  margin-top: 0.5%;
  }
 /* align the div of the about title  */
.about-title
{
  align-items: center;
  text-align: center;
}

/* contact componet postion */
.contact-postion
{
  position: relative;
  margin-top: 10%;
}
/* my name css */
.myname
{
  color: #0B0C10;
  font-size: 130%;
}
/* vue particles align in the main section */
.vue-particles
{
    width: 100%;
    height:100%;
}

.Expereince-postion
{
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 5%;
}
.section-02
{
  height:100vh;
  background-color: white;
} 

.section-03
{
  background-color: white;
}

.section-04
{
  background-color: #F2AA4CFF;
}


/* Resposive Part */
@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{
  .vue-particles
{
    width: 100%;
    height: 100%;
}

.main-text
{
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 80%;
  font-family: 'Titillium Web', sans-serif;
}

}

</style>

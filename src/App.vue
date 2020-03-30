<template>
  
     <!-- main div for the website -->
  <div id="app">
    
    <!-- create the head for the website -->
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
    
    <header>
      <nav class = "navbar">
        <img src = "./assets/Khaled.png" alt = "logo" class = "logo" >
        <!-- this for the responsive navbar -->
        <a href="#" class = "burger">
          <span class = "bar"></span>
          <span class = "bar"></span>
          <span class = "bar"></span>
          </a>
        <div class = "navbar-links">
          <ul>

          <li> <a class = "link-style" href ="#Home">Home </a> </li>
          <li> <a  class = "link-style" href ="#About">About</a> </li>
          <li> <a  class = "link-style" href ="#Expereince">Expereience </a> </li>
          <li> <a class = "link-style" href ="#Contact">Contact </a> </li>

          </ul>
        </div> <!-- end of the nav bar links -->
      </nav>
    </header> <!-- end of the header -->


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
        <div class = "main-text"  > 
           <p data-aos= "flip-down" data-aos-delay= "400"> Hello , I,m </p> <p class = "myname" 
           data-aos= "flip-down" data-aos-delay= "400"> Khaled Elzeiny </p> 
            <p data-aos= "flip-down" data-aos-delay= "300">I,m full-stack developer / software Engineer </p>
        </div>

        <div class = "About button">
           <button class="home-button"></button>
        </div>
    </section>


    <!-- Section for the About -->
  <section class = " section-01 section-02" id = "About">

      <!-- about title on the about section -->
      <div class = "about-title">
       <p data-aos="fade-right" data-aos-delay= "400" class = "text-01"> About </p>
       </div>

     


      <!-- about postion for the profile -->
      <div data-aos="fade-right" data-aos-delay= "400" class = "about-postion">
      <About class = "about" > </About>
      </div>

      <div data-aos="fade-left" data-aos-delay= "400" class = "progress-bar-postion">
        <ProgressBar > </ProgressBar>
        </div>
    </section>


      <!-- Section for the expereince -->
    <section class = " section-01 section-03" id = "Expereince">

      <!--This for the expereince title postion -->
      <div class = "experience-title">
     <p  data-aos="fade-right" data-aos-delay= "400" class = "text-01"> Expereince </p>
     </div>

     <!-- this for the postion of the experience component-->
      <div class = "Expereince-postion">
        <Expereience> </Expereience>
       </div>
    </section>

    <!--Section for the Contact -->
    <section class = " section-01 section-04" id = "Contact">


      <div class="arrow-down"></div>


       <div class = "Contact-title"> 
       <p> Contact Me</p>
       </div>
       <!-- this is the contact component -->
      <contact class = "contact-postion"> </contact>
      <!-- this is the social media component -->
      <social class = "socialMedia-postion"> </social>
    </section>


  </div>     <!-- end of the main div -->
</template>

<script>
// about component 
import About from "./components/About.vue"
// contact form component 
import Contact from "./components/Contact.vue"
// progress bar component 
import ProgressBar from "./components/ProgressBar.vue"
// expereince component 
import Expereience from "./components/Experience.vue"
// social media component 
import Social from "./components/Socialmedia.vue"





export default {

  name: 'App',

  components:
  {
    About,
    Contact,
    ProgressBar,
    Expereience,
    Social 
  },

  mounted()
  {

    // burger element 
  const toggleButton = document.getElementsByClassName('burger')[0]
  // navbar itself
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

  // make the burger as open navbar 
    toggleButton.addEventListener('click' , () => 
  {
    navbarLinks.classList.toggle('active')
   })

  }
}
</script>

<style  scoped>

@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

#app {
  font-family:'Raleway';
  margin: 0;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin: 0;
  padding: 0;
}


/* Section 01 CSS */
.section-01
{
  height:100vh;
  width: 100%;
  background-color: #F2AA4CFF;
  overflow: hidden;
}


/* logo styling */
.logo
{
  float:left;
  margin-left: 2%;
  height: 40px;
}


/* styling the header */
header
{
  position: relative;
  top:0;
  background:none;
  width: auto;
}

/* navbar styling */
 .navbar-links
 {
   background: none;
 }


.navbar
{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: none;
  color: #FFFAFA;
  margin:0 auto;
  width: 100%;
} 

/* style fortext-decoration: #FFFAFA; each element in the list */
 .navbar-links ul
{
  margin:0;
  padding:0;
  display: flex;
}

/*  style of each item in the li */
.navbar-links li
{
  list-style: none;
}

.navbar-links li a
{
 padding: 1.1rem;
 display: inline-block;
 margin-left:70px;
 margin-right: 12px;
 position: relative;
}

nav a
{
  color:#FFFAFA;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}

nav
{
  background-color: #F2AA4CFF;
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
  width : 70%;
}


/* responsive part for the nav-bar */
.burger
{
  position: absolute;
  top:.75rem;
  right:1rem;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height:21px;
}

.burger .bar
{
 height:3px;
 width: 100%;
 background-color: #191919;

}
/* vue particles in home page */  
 .vue-particles
{
    width:100%;
    height:100vh;
     margin: 0;
  padding: 0;
}

/* main text in the home page */
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

/* my name css */
.myname
{
  color: #0B0C10;
  font-size: 130%;
}


/* This the css for section 2 */

.section-02
{
  height:115vh;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
} 

 /* align the div of the about title  */
.about-title
{
  align-items: center;
  text-align: center;
}

/* about component postion */

.about-postion
{
  float: left;
  margin-left: 5%;
  margin-top: 6%;
  width:30%;
}

/* about , expereince and contact page title  */
.text-01
{
  margin: 5%;
  font-size: 200%;
  align-items: center;
  font-weight: 800;
} 

/* this the stle for the progress bar compnent */
.progress-bar-postion
{
  float:right;
  width: 50%;
  margin-right: 3%;
  margin-top: 0.5%;
  }



.section-03
{
  width: 100%;
  height: 170vh;
  box-sizing: border-box;
  background-color: white;
}

.experience-title
{
  align-items: center;
  text-align: center; 
  
}


/* this is the postion of the expereince component postion and styling */
.Expereince-postion
{
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 5%;
}


/* section 04 CSS */

/* drawing the triangle in the contact form */
.arrow-down {
  position: relative;
  width: 0; 
  height: 0; 
  border-left: 900px solid transparent;
  border-right: 400px solid transparent;
  border-top: 150px solid white;
  align-items: center;
}

/* section styling for section 4 */
.section-04
{
  width: 100%;
  box-sizing: border-box;
  height:90vh;
  background-color: #F2AA4CFF;
}

/* contact componet postion */
.contact-postion
{
  position: relative;
  margin-top: 5%;
  align-items: center;
  margin-left: 25%;
}

.Contact-title
{
  text-align: center;
  font-weight: 800;
  font-size: 180%;
  position: relative;
  margin-top: 5%;
}

.socialMedia-postion
{
  margin-top:3%;
}
@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{

#app {
  font-family:'Raleway';
  margin: 0;
}
 /* vue particles in home page */  
 .vue-particles
{
  width:100%;
  height:70vh;
}

nav
{
  background-color: #F2AA4CFF;
  width: 100%;
}

/* main text in the home page */
.main-text
{
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 100%;
}


/* Section 01 CSS */
.section-01
{
  height:70vh;
  width: 100%;
  background-color: #F2AA4CFF;
  box-sizing: border-box;
}


/*creating responsive nav-bar */
  .burger
  {
  display: flex;
  background-color: #F2AA4CFF;
  }

  /* logo styling for responsive part*/
  .logo
  {
  float:left;
  margin-left: 2%;
  margin-top:2%;
  height: 30px;
  background:transparent;
  }

  .navbar-links
  {
    display: none;
    width: 100%;
    background:transparent;
  }

   .navbar
  {
    flex-direction: column;
    align-items: flex-start;
  background-color: #F2AA4CFF;
  }

  .navbar-links ul
  {
    flex-direction: column;
    width:100%;
  }

  .navbar-links li
  {
    text-align: center;
  }

  .navbar-links li a 
  {
    padding: .5rem 1rem;
    margin-left:0 ;
    margin-right:0;
  }

  .navbar-links.active
  {
    display: flex;
  }



  /* Css for the Section 02 */

.section-02
{
  height:170vh;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
}

 /* align the div of the about title  */
.about-title
{
  align-items: center;
  text-align: center;
}

/* about component postion */

.about-postion
{
  width:90%;
  align-items: center;
}

/* about main text */
.text-01
{
  font-size: 150%;
  margin-bottom: 0.5%;
  align-items: center;
}
  
/* this the stle for the progress bar compnent */
.progress-bar-postion
{
  width: 95%;
  margin-top: 1.5%;
  }


/* Css for section 3 */
.section-03
{
  width: 100%;
  height: 215vh;
  box-sizing: border-box;
  background-color: white;
}

/* expereince title postion and styling */
.experience-title
{
  align-items: center;
  text-align: center; 
  margin-bottom: 15%;

  
}

/* section 04 CSS */

/* drawing the triangle in the contact form */
.arrow-down {
  position: relative;
  width: 0; 
  height: 0; 
  border-left: 900px solid transparent;
  border-right: 400px solid transparent;
  border-top: 150px solid white;
  align-items: center;
}

/* section styling for section 4 */
.section-04
{
  width: 100%;
  box-sizing: border-box;
  height:100vh;
  background-color: #F2AA4CFF;
}

/* contact componet postion */
.contact-postion
{
  position: relative;
  margin-top: 5%;
  align-items: center;
}


}
</style>




<template>
<!-- main div for the website -->
<div id="app">
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Raleway" />
  <body>
    <!-- section for the website -->
    <section class="section-01" id="Home">
      <div class="wrapper">
        <nav class="navbar">
          <a href="#Home">
            <img src="./assets/Khaled.png" alt="logo" class="logo" />
          </a>
          <div class="icon">
            <i class="fas fa-bars"></i>
          </div>

          <div class="links-wrapper active">
            <div class="backdrop"></div>
            <div class="close-btn">
              <i class="fas fa-times"></i>
            </div>
            <ul class="links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Expereience">Experience</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <vue-particles
        class="vue-particles"
        color="#0B0C10"
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
        clickMode="push"
      ></vue-particles>

      <!-- text for the Home page -->
      <div class="main-text">
        <p data-aos="flip-down" data-aos-duration="3000">Hello , I'm</p>
        <p class="myname" data-aos="flip-down" data-aos-duration="3000">Khaled Elzeiny</p>
        <p data-aos="flip-down" data-aos-duration="3000">full-stack developer / Software Engineer</p>
      </div>

      <!-- This is the About me Button on the home SEction -->
      <div class="About-button">
        <button
          class="Home-button"
          type="button"
          onclick="window.location.href = '#About' "
        >About Me</button>
      </div>
    </section>

    <!-- Section for the About -->
    <section class="section-01 section-02" id="About">
      <!-- about title on the about section -->
      <div class="about-title">
        <p data-aos="fade-right" data-aos-duration="1500" class="text-01">About</p>
      </div>

      <!-- about postion for the profile -->
      <div data-aos="fade-right" data-aos-duration="1500" class="about-postion">
        <About class="about"></About>
      </div>

      <div data-aos="fade-left" data-aos-duration="1800" class="progress-bar-postion">
        <ProgressBar></ProgressBar>
      </div>
    </section>

    <!-- Section for the expereince -->
    <section class="section-01 section-03" id="Expereience">
      <!--This for the expereince title postion -->
      <div class="experience-title">
        <p data-aos="fade-right" data-aos-duration="1000" class="text-01">Experience</p>
      </div>

      <!-- this for the postion of the experience component-->
      <div class="Expereince-postion">
        <Expereience></Expereience>
      </div>
    </section>

    <!--Section for the Contact -->
    <section class="section-01 section-04" id="Contact">
      <div class="arrow-down"></div>

      <div  class="Contact-title">
        <p>Contact Me</p>
      </div>
      <!-- this is the contact component -->
      <contact class="contact-postion"></contact>
      <!-- this is the social media component -->
      <div class="socialMedia-postion">
        <social></social>
      </div>
      <div class = "copy-right">
        <p>KHALED ELZEINY © 2020</p>
        </div>
    </section>
  </body>
</div>
<!-- end of the main div -->
</template>

<script>
// about component
import About from "./components/About.vue";
// contact form component
import Contact from "./components/Contact.vue";
// progress bar component
import ProgressBar from "./components/ProgressBar.vue";
// expereince component
import Expereience from "./components/Experience.vue";
// social media component
import Social from "./components/Socialmedia.vue";

export default {
  name: "App",

  components: {
    About,
    Contact,
    ProgressBar,
    Expereience,
    Social
  },
  mounted() {
    const openIcon = document.querySelector(".icon");
    const linksWrapper = document.querySelector(".links-wrapper");
    const backdrop = document.querySelector(".backdrop");
    const closeIcon = document.querySelector(".close-btn");

    openIcon.addEventListener("click", () => {
      linksWrapper.classList.add("open");
    });
    closeIcon.addEventListener("click", () => {
      linksWrapper.classList.remove("open");
    });
    backdrop.addEventListener("click", () => {
      linksWrapper.classList.remove("open");
    });
  }
};
</script>


<style>
#app {
  font-family: "Raleway";
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
}

/* logo styling */
.logo {
  float: left;
  margin-left: 2%;
  height: 40px;
}
/* Desktop view */
.navbar {
  width: 100%;
  background-color: #f2aa4cff;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  box-sizing: border-box;
  overflow: hidden;
}
.icon,
.close-btn {
  display: none;
  font-size: 1.2em;
  cursor: pointer;
}
.links {
  display: flex;
  list-style: none;
}
.links li {
  margin-right: 24px;
}

.links li a {
  text-decoration: none;
  color: #191919;
  letter-spacing: -0.5px;
  padding: 10px;
}

.links li a:hover {
  color: #fffafa;
}
.backdrop {
  display: none;
  animation: 0.4s ease-in-out fadeIn forwards;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #f2aa4cff;
  cursor: pointer;
}
@keyframes fadeIn {
  to {
    background: #f2aa4cff;
  }
}

/* Section 01 CSS */
.section-01 {
  height: 100vh;
  width: 100%;
  background-color: #f2aa4cff;
  overflow-x: hidden;
}

/* vue particles in home page */
.vue-particles {
  width: 100%;
  height: 90vh;
  margin: 0;
  padding: 0;
}

/* main text in the home page */
.main-text {
  color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 180%;
}

/* postion of  the about me button on the home page */
.About-button {
  position: absolute;
  left: 48%;
  top: 63%;
  transform: translate(-50%, -50%);
}
/* home button styling */
.Home-button {
  background-color: #191919;
  color: #fffafa;
  border-color: transparent;
  width: 200%;
  height: 40px;
  font-size: 110%;
  -webkit-appearance: none;
}
.Home-button:focus {
  background-color: #fffafa;
  color: #191919;
}

.Home-button:visited {
  background-color: #fffafa;
}

.home-button:hover {
  background-color: #fffafa;
  color: #191919;
}

/* my name css */
.myname {
  color: #0b0c10;
  font-size: 130%;
  line-height: 110x;
}
/* This the css for section 2 */

.section-02 {
  height: auto;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
}

/* align the div of the about title  */
.about-title {
  align-items: center;
  text-align: center;
}

/* about component postion */

.about-postion {
  float: left;
  margin-left: 5%;
  margin-top: 6%;
  width: 30%;
}

/* about , expereince and contact page title  */
.text-01 {
  margin: 5%;
  font-size: 200%;
  align-items: center;
  font-weight: 800;
}

/* this the stle for the progress bar compnent */
.progress-bar-postion {
  float: right;
  width: 50%;
  margin-right: 3%;
  margin-top: 0.5%;
}

.section-03 {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: white;
}

.experience-title {
  align-items: center;
  text-align: center;
}

/* this is the postion of the expereince component postion and styling */
.Expereince-postion {
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 5%;
  margin-bottom:5%
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
.section-04 {
  width: 100%;
  box-sizing: border-box;
  height: auto;
  background-color: #f2aa4cff;
}

/* contact componet postion */
.contact-postion {
  position: relative;
  margin-top: 5%;
  align-items: center;
  margin-left: 25%;
}

/* contact title of the contact section */
.Contact-title {
  text-align: center;
  font-weight: 800;
  font-size: 180%;
  position: relative;
  margin-top: 5%;
}

/*social media postion in  the contact section */
.socialMedia-postion {
  text-align: center;
  margin-top: 3%;
}

/* copy right text in the bottom of the page */
.copy-right
{
  text-align: center;
  margin-top: 1.5%;
  font-size: 40%;
  font-weight: 650;
}

/* IPAD / IPAD MINI view */
@media only screen and (max-width: 1024px) {
  .navbar {
    width: 100%;
    background-color: #f2aa4cff;
    border-bottom: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .icon,
  .close-btn {
    display: none;
    font-size: 1.2em;
    cursor: pointer;
  }
  .links {
    display: flex;
    list-style: none;
  }
  .links li {
    margin-right: 24px;
  }

  .links li a {
    text-decoration: none;
    color: #191919;
    letter-spacing: -0.5px;
    padding: 10px;
  }

  .links li a:hover {
    color: #fffafa;
  }
  .backdrop {
    display: none;
    animation: 0.4s ease-in-out fadeIn forwards;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #f2aa4cff;
    cursor: pointer;
  }
  @keyframes fadeIn {
    to {
      background: #f2aa4cff;
    }
  }

  /* Section 01 CSS */
  .section-01 {
    height: auto;
    width: 100%;
    background-color: #f2aa4cff;
    overflow-x: hidden;
  }

  /* vue particles in home page */
  .vue-particles {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  /* main text in the home page */
  .main-text {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 160%;
  }

  /* postion of  the about me button on the home page */
  .About-button {
    position: absolute;
    left: 45%;
    top: 63%;
    transform: translate(-50%, -50%);
  }
  /* home button styling */
  .Home-button {
    background-color: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 200%;
    height: 40px;
    font-size: 110%;
    -webkit-appearance: none;
  }
  .Home-button:focus {
    background-color: #fffafa;
    color: #191919;
  }

  .Home-button:visited {
    background-color: #fffafa;
  }

  .home-button:hover {
    background-color: #fffafa;
    color: #191919;
  }

  /* my name css */
  .myname {
    color: #0b0c10;
    font-size: 130%;
    line-height: 110x;
  }
  /* This the css for section 2 */

  .section-02 {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }

  /* align the div of the about title  */
  .about-title {
    align-items: center;
    text-align: center;
  }

  /* about component postion */

  .about-postion {
    float: left;
    margin-left: 5%;
    margin-top: 6%;
    width: 30%;
  }

  /* about , expereince and contact page title  */
  .text-01 {
    margin: 5%;
    font-size: 200%;
    align-items: center;
    font-weight: 800;
  }

  /* this the stle for the progress bar compnent */
  .progress-bar-postion {
    float: right;
    width: 50%;
    margin-right: 3%;
    margin-top: 0.5%;
  }

  .section-03 {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: white;
  }

  .experience-title {
    align-items: center;
    text-align: center;
    font-size: 110%;
  }

  /* this is the postion of the expereince component postion and styling */
  .Expereince-postion {
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
    border-left: 500px solid transparent;
    border-right: 400px solid transparent;
    border-top: 150px solid white;
    align-items: center;
  }

  /* section styling for section 4 */
  .section-04 {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    background-color: #f2aa4cff;
  }

  /* contact componet postion */
  .contact-postion {
    position: relative;
    margin-top: 5%;
    align-items: center;
    margin-left: 25%;
  }

  /* contact title of the contact section */
  .Contact-title {
    text-align: center;
    font-weight: 800;
    font-size: 150%;
    position: relative;
    margin-top: 5%;
  }

  /*social media postion in  the contact section */
  .socialMedia-postion {
    margin-top: 3%;
  }
}

.copy-right
{
  text-align: center;
  margin-top: 1.5%;
  font-size: 50%;
  font-weight: 650;
}

/* Mobile view */
@media only screen and (max-width: 960px) {
  /* Section 01 CSS */
  .section-01 {
    position: relative;
    overflow: hidden;
  }
  

  /* Section 01 CSS */
  .section-01 {
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: none;
    margin: 0;
    padding: 0;
  }

  /* Styling for the responinsive navbar */
  .icon,
  .close-btn {
    display: block;
  }
  .icon {
    position: absolute;
    right: 24px;
  }

  .links {
    position: absolute;
    top: 0;
    height: 100%;
    width: 90%;
    right: -90%;
    background: #191919;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    z-index: 2;
    transition: 0.3s ease-in-out;
  }
  .links li {
    margin-right: 0;
    margin-bottom: 50px;
    font-size: 1.5em;
  }

  .links li a {
    color: #fffafa;
    font-size: 80%;
  }

  .links li a:hover {
    color: #f2aa4cff;
  }
  .close-btn {
    position: absolute;
    top: 24px;
    right: -90vh;
    color: #fffafa;
    font-size: 1.2em;
    z-index: 3;
    transition: 0.3s ease-in-out;
  }
  .close-btn:hover {
    color: #f2aa4cff;
    cursor: pointer;
  }
  /* Open class */
  .open .links {
    right: 0;
  }
  .open .close-btn {
    right: 32px;
  }
  .open .backdrop {
    display: block;
  }

  /* vue particles in home page */
  .vue-particles {
    width: 100%;
    height: 70vh;
  }

  /* main text in the home page */
  .main-text {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 110%;
  }

  /* postion of the about button */
  .About-button {
    color: white;
    position: absolute;
    left: 46%;
    top: 65%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 90%;
  }

  /* home button styling */
  .Home-button {
    background-color: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 170%;
    height: 35px;
    font-size: 90%;
    -webkit-appearance: none;
  }
  .home-button:hover {
    background-color: #fffafa;
    color: #191919;
  }

  /* Section 01 CSS */
  .section-01 {
    height: auto;
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: border-box;
  }

  /* logo styling for responsive part*/
  .logo {
    float: left;
    margin-left: 10%;
    margin-top: 10%;
    height: 30px;
    background: transparent;
  }

  .section-02 {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }

  /* align the div of the about title  */
  .about-title {
    align-items: center;
    text-align: center;
  }

  /* about component postion */

  .about-postion {
    width: 90%;
    align-items: center;
  }

  /* about main text */
  .text-01 {
    font-size: 150%;
    margin-bottom: 0.5%;
    align-items: center;
  }

  /* this the stle for the progress bar compnent */
  .progress-bar-postion {
    width: 95%;
    margin-top: 1.5%;
  }

  /* Css for section 3 */
  .section-03 {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: white;
  }

  /* expereince title postion and styling */
  .experience-title {
    align-items: center;
    text-align: center;
    margin-bottom: 10%;
  }

  /* section 04 CSS */

  /* drawing the triangle in the contact form */
  .arrow-down {
    position: relative;
    width: 0;
    height: 0;
    border-left: 400px solid transparent;
    border-right: 450px solid transparent;
    border-top: 100px solid white;
    align-items: center;
  }

  /* section styling for section 4 */
  .section-04 {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    background-color: #f2aa4cff;
  }

  /* contact componet postion */
  .contact-postion {
    position: relative;
    margin-top: 10%;
    align-items: center;
  }

  /* contact title of the contact section */
  .Contact-title {
    text-align: center;
    font-weight: 800;
    font-size: 100%;
    position: relative;
    margin-top: 10%;
  }
}

.copy-right
{
  text-align: center;
  margin-top: 1.5%;
  font-size: 30%;
  font-weight: 650;
}
@media only screen and (max-width: 625px) 
{
   /* Section 01 CSS */
  .section-01 {
    position: relative;
    overflow: hidden;
  }
  /* Section 01 CSS */
  .section-01 {
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: none;
    margin: 0;
    padding: 0;
  }

  /* Styling for the responinsive navbar */
  .icon,
  .close-btn {
    display: block;
  }
  .icon {
    position: absolute;
    right: 24px;
  }

  .links {
    position: absolute;
    top: 0;
    height: 100%;
    width: 90%;
    right: -90%;
    background: #191919;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    z-index: 2;
    transition: 0.3s ease-in-out;
  }
  .links li {
    margin-right: 0;
    margin-bottom: 50px;
    font-size: 1.5em;
  }

  .links li a {
    color: #fffafa;
    font-size: 80%;
  }

  .links li a:hover {
    color: #f2aa4cff;
  }
  .close-btn {
    position: absolute;
    top: 24px;
    right: -90vh;
    color: #fffafa;
    font-size: 1.2em;
    z-index: 3;
    transition: 0.3s ease-in-out;
  }
  .close-btn:hover {
    color: #f2aa4cff;
    cursor: pointer;
  }
  /* Open class */
  .open .links {
    right: 0;
  }
  .open .close-btn {
    right: 32px;
  }
  .open .backdrop {
    display: block;
  }

  /* vue particles in home page */
  .vue-particles {
    width: 100%;
    height: 70vh;
  }

  /* main text in the home page */
  .main-text {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 90%;
  }

  /* postion of the about button */
  .About-button {
    color: white;
    position: absolute;
    left: 45%;
    top: 65%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 90%;
  }

  /* home button styling */
  .Home-button {
    background-color: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 180%;
    height: 25px;
    font-size: 85%;
    -webkit-appearance: none;
  }

  .Home-button:focus {
    background-color: #fffafa;
    color: #191919;
  }

  .Home-button:visited {
    background-color: #fffafa;
  }

  .home-button:hover {
    background-color: #fffafa;
    color: #191919;
  }
  /* Section 01 CSS */
  .section-01 {
    height: auto;
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: border-box;
  }

  /* logo styling for responsive part*/
  .logo {
    float: left;
    margin-left: 10%;
    margin-top: 10%;
    height: 30px;
    background: transparent;
  }

  .section-02 {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }

  /* align the div of the about title  */
  .about-title {
    align-items: center;
    text-align: center;
    font-size:95%;
  }

  /* about component postion */

  .about-postion {
    width: 90%;
    align-items: center;
  }

  /* Expereince title  */
  .text-01 {
    font-size: 150%;
    margin-bottom: 0.5%;
    align-items: center;
  }

  /* this the stle for the progress bar compnent */
  .progress-bar-postion {
    width: 95%;
    margin-top: 1.5%;
  }

  /* Css for section 3 */
  .section-03 {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: white;
  }

  /* expereince title postion and styling */
  .experience-title {
    align-items: center;
    text-align: center;
    margin-bottom: 10%;
    font-size:90%;
  }

  /* section 04 CSS */

  /* drawing the triangle in the contact form */
  .arrow-down {
    position: relative;
    width: 0;
    height: 0;
    border-left: 250px solid transparent;
    border-right: 300px solid transparent;
    border-top: 90px solid white;
    align-items: center;
  }

  /* section styling for section 4 */
  .section-04 {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    background-color: #f2aa4cff;
  }

  /* contact componet postion */
  .contact-postion {
    position: relative;
    margin-top: 10%;
    align-items: center;
  }

  /* contact title of the contact section */
  .Contact-title {
    text-align: center;
    font-weight: 800;
    font-size: 100%;
    position: relative;
    margin-top: 10%;
  }

  /* copy right text in the bottom of the page */
.copy-right
{
  text-align: center;
  margin-top: 1.5%;
  font-size: 30%;
  font-weight: 650;
}
}

@media only screen and (max-width:425px) 
{
   /* Section 01 CSS */
  .section-01 {
    position: relative;
    overflow: hidden;
  }
  /* Section 01 CSS */
  .section-01 {
    height: 100vh;
  }

  /* Section 01 CSS */
  .section-01 {
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: none;
    margin: 0;
    padding: 0;
  }

  /* Styling for the responinsive navbar */
  .icon,
  .close-btn {
    display: block;
  }
  .icon {
    position: absolute;
    right: 24px;
  }

  .links {
    position: absolute;
    top: 0;
    height: 100%;
    width: 90%;
    right: -90%;
    background: #191919;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    z-index: 2;
    transition: 0.3s ease-in-out;
  }
  .links li {
    margin-right: 0;
    margin-bottom: 50px;
    font-size: 1.5em;
  }

  .links li a {
    color: #fffafa;
    font-size: 50%;
  }

  .links li a:hover {
    color: #f2aa4cff;
  }
  .close-btn {
    position: absolute;
    top: 24px;
    right: -90vh;
    color: #fffafa;
    font-size: 1.2em;
    z-index: 3;
    transition: 0.3s ease-in-out;
  }
  .close-btn:hover {
    color: #f2aa4cff;
    cursor: pointer;
  }
  /* Open class */
  .open .links {
    right: 0;
  }
  .open .close-btn {
    right: 32px;
  }
  .open .backdrop {
    display: block;
  }

  /* vue particles in home page */
  .vue-particles {
    width: 100%;
    height: 70vh;
  }

  /* main text in the home page */
  .main-text {
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 90%;
  }

  /* postion of the about button */
  .About-button {
    color: white;
    position: absolute;
    left: 46%;
    top: 60%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 90%;
  }

  /* home button styling */
  .Home-button {
    background-color: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 160%;
    height: 25px;
    font-size: 60%;
    -webkit-appearance: none;
  }

  .Home-button:focus {
    background-color: #fffafa;
    color: #191919;
  }

  .Home-button:visited {
    background-color: #fffafa;
  }

  .home-button:hover {
    background-color: #fffafa;
    color: #191919;
  }
  /* Section 01 CSS */
  .section-01 {
    height: auto;
    width: 100%;
    background-color: #f2aa4cff;
    box-sizing: border-box;
  }

  /* logo styling for responsive part*/
  .logo {
    float: left;
    margin-left: 10%;
    margin-top: 10%;
    height: 30px;
    background: transparent;
  }

  .section-02 {
    height: auto;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
  }

  /* align the div of the about title  */
  .about-title {
    align-items: center;
    text-align: center;
    font-size:85%;
  }

  /* about component postion */

  .about-postion {
    width: 90%;
    align-items: center;
  }

  /* Expereience text */
  .text-01 {
    font-size: 130%;
    margin-bottom: 0.5%;
    align-items: center;
  }

  /* this the stle for the progress bar compnent */
  .progress-bar-postion {
    width: 95%;
    margin-top: 1.5%;
  }

  /* Css for section 3 */
  .section-03 {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: white;
  }

  /* expereince title postion and styling */
  .experience-title {
    align-items: center;
    text-align: center;
    margin-bottom: 10%;
    font-size:90%;
  }

  /* section 04 CSS */

  /* drawing the triangle in the contact form */
  .arrow-down {
    position: relative;
    width: 0;
    height: 0;
    border-left: 250px solid transparent;
    border-right: 300px solid transparent;
    border-top: 90px solid white;
    align-items: center;
  }

  /* section styling for section 4 */
  .section-04 {
    width: 100%;
    box-sizing: border-box;
    height: auto ;
    background-color: #f2aa4cff;
  }

  /* contact componet postion */
  .contact-postion {
    position: relative;
    margin-top: 20%;
    align-items: center;
  }

  /* contact title of the contact section */
  .Contact-title {
    text-align: center;
    font-weight: 800;
    font-size: 100%;
    position: relative;
    margin-top: 20;
  }

  /* copy right text in the bottom of the page */
.copy-right
{
  text-align: center;
  margin-top: 1.5%;
  font-size: 20%;
  font-weight: 650;
}
  
}  
</style>
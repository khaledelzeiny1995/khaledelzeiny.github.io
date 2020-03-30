<template>
 <div id = "expereince">


     <p data-aos="fade-left" class = "title "> Eduction <p>
     <div class = "eduction-hig" id = "eduction-Hig">
         <P class = "des-01" data-aos="fade-up-right"  > High school </P>
         <p class = "des-02" data-aos="fade-up-right" > The school of Research Sceince </p>
         <p class = "des-03" data-aos="fade-up-right" > IGCSE/A level circuum </p>
         <img data-aos="flip-right" class = "logo2" src= "./srs.jpg">  
         </div> <!-- end of the eduction div -->


         <div class = "eduction-uni" id = "eduction-Uni">
         <p class = "des-01" data-aos="fade-up-right" > University </p>
         <p class = "des-02" data-aos="fade-up-right" > University of Manitoba </p>
         <p class = "des-03" data-aos="fade-up-right" > Bachlor of Science in computer Science </p>
         <p class = "des-03" data-aos="fade-up-right" > 2015 - 2021 </p>
          <img data-aos="flip-left" class = "logo" src= "./logo.svg" >
         </div> <!-- end of the eduction uni div -->

         <div class = "work-experience" id = "work-experience">
             <p data-aos="zoom-out-right" class = "des-04"> work Experience </p>
             <p ata-aos="fade-right" class = "des-02"> Lily and Lou </p>
             <p data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" class = "des-03">I am a Full stack Developer trainee . During my internship 
                 I worked on a project , 
                 one of the projects was to create questionnaires using Vue.js framework , Html and CSS for building 
                 a responsive UI and Django Rest framework for building database representation models , managing routes , 
                 views and requests. Currently working on building a customizer using Vue.js for building 
                 responsive UI for the customizer so users can customise there cloth height , width , colour and design there preferred style .</p>    
         </div>
         <!-- this the work expereince div -->

         <div class = "projects" id = "projects">

             <p data-aos="zoom-out-right" class = "des-04">Projects</p>
             <p  data-aos="fade-right" class = "des-02"> Portfolio </p>
             <p data-aos="zoom-in-down" class = "des-03"> building my portfolio using Vue.js , Html and CSS for responsive UI . Also 
                 I am using Django REST framework for 
                 building the contact form routes and requests . 
                 https://github.com/khaledelzeiny1995/khaled-website</p>

           <p data-aos="fade-right" class = "des-02"> Ezolopy </p>
           <p data-aos="zoom-in-down" class = "des-03"> I am building a website for a startup company called Ezolopy .
                a responsive UI using react.js , Html and css. Plus , 
               I am using exprdes-03ess.js and mongodb to manage routes , 
               views and requests. https://github.com/ezlopy/Main-site </p>      
          </div>
          <!-- end of the projects div -->       
         </div>
          <!-- end of main div  -->
         
</template>

<script>


export default {

}


</script>

<style scoped>
/* CSS for the logo the university of manitoba*/
.logo
{
  display: inline-block;
  width: 500px;
  height: 250px;
  object-fit: cover;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 70%;
  height: 60%;
  object-fit: cover;
  position: relative;
  margin-top:5%; 
}

/* for the main title */
.title
{
    font-size: 150%;
    letter-spacing: 5pt;
    font-weight: 600;
    text-align: center;
} 

/* for thr high school des div */
.eduction-hig
{
    float: left;
    margin-left: 2%;
    margin-top:10%;
}
/* for the uni des div */
.eduction-uni
{
    float: right;
    margin-right: 3%;
    margin-top:10%;
}

/* work expereince dev */
.work-experience
{
    
    margin-top: 35%;

}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin: 4%;
    letter-spacing: 10pt;
    font-weight: 800;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -10%;
    font-size: 130%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom:2%;
    text-align: center;
}

/* des for the tite for dives in expereince and projects */
.des-02
{

    font-weight: 600;
    font-size:110%;
    line-height: 350%;
    text-align: center;
}

/* des for the text in the divs */
.des-03
{
    line-height: 130%;
    letter-spacing: 2pt;
}

/* Responsive part for the expereince companent */
@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{


/* CSS for the logo the university of manitoba */

.logo
{
  display: inline-block;
  width: 50%;
  height: 40%;
  object-fit: cover;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 50%;
  height: 50%;
  object-fit: cover;
  position: relative; 
  margin:10px;
}

/* for the main title */
.title
{
    margin-top: 4%;
    font-size: 130%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom: 5%;
    margin-left: 2%;
    text-align: center;
} 

/* for thr high school des div */
.eduction-hig
{
    margin-top: 30%;
    margin-left: -1% ;
    width: 100%;
    align-items: center;
    align-self: center;
    text-align-last: center;
}
/* for the uni des div */
.eduction-uni
{
    margin-right: 3%;
    margin-top: 10%;
    margin-left: -2%;
    margin-bottom: 15%;
    width: 100%;
    align-items: center;
    align-self: center;
    text-align-last: center;

}

/* work expereince dev */
.work-experience
{
    text-align: left;
    margin-top: 25%;
}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 15%;
    letter-spacing: 10pt;
    font-weight: 800;
    margin-bottom: 10%;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -5%;
    font-size: 80%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom:7%;
    text-align: center;
}

/* des for the tite for dives in expereince and projects */
.des-02
{

    font-weight: 600;
    font-size:70%;
    line-height: 350%;
    text-align: center;
}

/* des for the text in the divs */
.des-03
{
    line-height: 65%;
    letter-spacing: 2pt;
    font-size: 50%;
    line-height: 350%;
}

}
</style>
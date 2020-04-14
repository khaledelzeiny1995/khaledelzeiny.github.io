<template>
 <div id = "expereince">


     <p data-aos="fade-left" data-aos-duration="1500" class = "title "> Education <p>
     <div class = "eduction-hig" id = "eduction-Hig">
         <P class = "des-01" data-aos="fade-up-right" data-aos-duration="1500" > High school </P>
         <p class = "des-02" data-aos="fade-up-right" data-aos-duration="1500" > The School of Research Science </p>
         <p class = "des-03" data-aos="fade-up-right" data-aos-duration="1500" > IGCSE/ A-Level Curriculum</p>
         <img data-aos="flip-right" data-aos-duration="1000" class = "logo2" src= "./srs.jpg">  
         </div> <!-- end of the eduction div -->


         <div class = "eduction-uni" id = "eduction-Uni">
         <p class = "des-01" data-aos="fade-up-right" data-aos-duration="1500" > University </p>
         <p class = "des-02" data-aos="fade-up-right" data-aos-duration="1500" > University of Manitoba </p>
         <p class = "des-03" data-aos="fade-up-right" data-aos-duration="1500" > BSc. In Computer Science </p>
         <p class = "des-03" data-aos="fade-up-right" data-aos-duration="1500" > 2015 - 2021 </p>
          <img data-aos="flip-left" data-aos-duration="1000" class = "logo3" src= "./logo.svg" >
         </div> <!-- end of the eduction uni div -->

         <div class = "work-experience" id = "work-experience">
             <p data-aos="zoom-out-right" data-aos-duration="1500" class = "des-05"> Work Experience </p>
             <p ata-aos="fade-right" data-aos-duration="1500" class = "des-02"> Lily and Lou </p>
             <p data-aos="fade-up" data-aos-duration="1500"
     data-aos-anchor-placement="top-bottom" class = "des-06">I am a full-stack developer trainee. During my internship 
     I worked on various projects, one of which was to create questionnaires using Vue.js framework. I’ve also used HTML
      and CSS for building a responsive UI and Django Rest Framework for building database representation models, managing routes, 
      views and requests. Currently working on building a customizer using Vue.js for building responsive UI 
     for clients to allow users to customize their clothes’ width, length, colour, design and preferred style.</p>    
         </div>
         <!-- this the work expereince div -->

         <div class = "projects" id = "projects">

             <p data-aos="zoom-out-right" data-aos-duration="1500" class = "des-04">Projects</p>
             <p  data-aos="fade-right" data-aos-duration="1500" class = "des-02"> Portfolio </p>
             <p data-aos="zoom-in-down" data-aos-duration="1500" class = "des-06"> Building my portfolio using Vue.js, HTML and CSS for responsive UI. Also,
                  I am using Express.js and mangodb to build Back-End for the contact form routes and requests.</p>

           <p data-aos="fade-right" data-aos-duration="1500" class = "des-02"> Ezolopy </p>
           <p data-aos="zoom-in-down" data-aos-duration="1500" class = "des-06"> Building my portfolio using Vue.js, HTML and CSS for responsive UI. Also,
                  I am using Express.js and mangodb to build Back-End for the contact form routes and requests.</p>      
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

#expereince
{
    text-align: center;
}
/* CSS for the logo the university of manitoba*/
.logo3
{
  display: inline-block;
  width: 400px;
  height: 250px;
  object-fit: fill;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 85%;
  height: 80%;
  object-fit: fill;
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
    
    margin-top: 50%;

}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 10%;
    letter-spacing: 10pt;
    font-weight: 800;
    line-height: 350%;
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
    line-height: 230%;
    letter-spacing: 2pt;
}

/* Responsive part for the expereince companent */
.des-05
{
    margin-bottom: 3%;
    margin-top: 15%;
    text-align: center;
    font-size: 130%;
    font-weight: 800;

}
/* this for the pargraph in experience */
.des-06
{
    line-height: 230%;
    letter-spacing: 2pt;
    width: 95%;
    text-align-last:center;
    font-size: 95%;
}

/* Mobile view */
@media only screen and (max-width: 1024px) {

/* CSS for the logo the university of manitoba*/
.logo3
{
  display: inline-block;
  width: 200px;
  height: 200px;
  object-fit:fill;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
 width: 150px;
 height: 150px;
 object-fit: fill;
 position: relative;
 margin-top:6%; 
}

/* for the main title */
.title
{
    font-size: 100%;
    letter-spacing: 2pt;
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
    
    margin-top: 50%;

}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 10%;
    letter-spacing: 10pt;
    font-weight: 800;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -10%;
    font-size: 100%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom:2%;
    text-align: center;
}

/* des for the tite for dives in expereince and projects */
.des-02
{

    font-weight: 600;
    font-size:80%;
    line-height: 350%;
    text-align: center;
}

/* des for the text in the divs */
.des-03
{
    line-height: 140%;
    letter-spacing: 2pt;
    font-size: 70%;
}

/* Responsive part for the expereince companent */
.des-05
{
    margin-bottom: 10%;
    margin-top: 5%;
    text-align: center;
    font-size: 110%;
    font-weight: 800;

}

.des-06
{
    line-height: 230%;
    letter-spacing: 2pt;
    width: 95%;
    text-align-last:center;
    font-size: 85%;
}

}

@media only screen and (max-width:960px)
{
/* CSS for the logo the university of manitoba */

.logo3
{
  display: inline-block;
  width: 30%;
  height: 30%;
  object-fit: fill;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 30%;
  height: 30%;
  object-fit: fill;
  position: relative; 
  margin:10px;
}

/* for the main title */
.title
{
    margin-top: 0.1%;
    font-size: 100%;
    letter-spacing: 5pt;
    font-weight: 700;
    text-align: center;
    margin-left: 1.5% ;
    text-align-last: center;
} 

/* for thr high school des div */
.eduction-hig
{
    margin-top: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;
}
/* for the uni des div */
.eduction-uni
{
    margin-top: 15%;
    margin-bottom: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;

}

/* work expereince dev */
.work-experience
{
    text-align: center;
    margin-top: 50%;
}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 10%;
    letter-spacing: 10pt;
    font-weight: 800;
    margin-bottom: 10%;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -4%;
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
    font-size: 60%;
    line-height: 350%;
}

/* Responsive part for the expereince companent */
.des-05
{
    margin-bottom: 10%;
    padding-top: 10%;
    text-align: center;
    font-size: 110%;
    font-weight: 800;

}
.des-06
{
    line-height: 230%;
    letter-spacing: 2pt;
    width: 95%;
    text-align-last:center;
    font-size: 70%;
}
}

@media only screen and (max-width: 645px) 
{
   /* CSS for the logo the university of manitoba */

.logo3
{
  display: inline-block;
  width: 30%;
  height: 30%;
  object-fit: fill;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 30%;
  height: 30%;
  object-fit: fill;
  position: relative; 
  margin:10px;
}

/* for the main title */
.title
{
    margin-top: 0.1%;
    font-size: 80%;
    letter-spacing: 5pt;
    font-weight: 700;
    text-align: center;
    margin-left: 1.5% ;
    text-align-last: center;
} 

/* for thr high school des div */
.eduction-hig
{
    margin-top: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;
}
/* for the uni des div */
.eduction-uni
{
    margin-top: 15%;
    margin-bottom: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;

}

/* work expereince dev */
.work-experience
{
    text-align: center;
    margin-top: 25%;
}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 10%;
    letter-spacing: 10pt;
    font-weight: 800;
    margin-bottom: 10%;
    font-size: 70%;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -4%;
    font-size: 60%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom:7%;
    text-align: center;
}

/* des for the tite for dives in expereince and projects */
.des-02
{

    font-weight: 600;
    font-size:60%;
    line-height: 350%;
    text-align: center;
}

/* des for the text in the divs */
.des-03
{
    line-height: 65%;
    letter-spacing: 2pt;
    font-size: 45%;
    line-height: 350%;
}
 
/* Responsive part for the expereince companent */
.des-05
{
    margin-bottom: 10%;
    padding-top: 10%;
    text-align: center;
    font-size: 80%;
    font-weight: 800;

 }

 .des-06
{
    line-height: 230%;
    letter-spacing: 2pt;
    width: 95%;
    text-align-last:center;
    font-size: 60%;
}
}
@media only screen and (max-width:400px) 
{

  /* CSS for the logo the university of manitoba */   
.logo3
{
  display: inline-block;
  width: 30%;
  height: 30%;
  object-fit: fill;
  position: relative;
}
 

/* Css for the logo of the SRS school */

.logo2
{
 display: inline-block;
  width: 25%;
  height: 30%;
  object-fit: fill;
  position: relative; 
  margin:10px;
}

/* for the main title */
.title
{
    margin-top: 0.1%;
    font-size: 70%;
    letter-spacing: 5pt;
    font-weight: 700;
    text-align: center;
    margin-left: 1.5% ;
    text-align-last: center;
} 

/* for thr high school des div */
.eduction-hig
{
    margin-top: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;
}
/* for the uni des div */
.eduction-uni
{
    margin-top: 15%;
    margin-bottom: 15%;
    width: 95%;
    align-items: center;
    align-self: center;
    text-align-last: center;

}

/* work expereince dev */
.work-experience
{
    text-align: center;
    margin-top: 25%;
}

/* des for the main title like project and experience */
.des-04
{
    text-align: center;
    margin-top: 10%;
    letter-spacing: 10pt;
    font-weight: 800;
    margin-bottom: 10%;
    font-size:60%;
}

/* des for the title that is above the div */
.des-01
{
    margin-top: -4%;
    font-size: 55%;
    letter-spacing: 5pt;
    font-weight: 700;
    margin-bottom:7%;
    text-align: center;
}

/* des for the tite for dives in expereince and projects */
.des-02
{

    font-weight: 600;
    font-size:55%;
    line-height: 350%;
    text-align: center;
}

/* des for the text in the divs */
.des-03
{
    line-height: 65%;
    letter-spacing: 2pt;
    font-size: 40%;
    line-height: 350%;
}

/* Responsive part for the expereince companent */
.des-05
{
    margin-bottom: 10%;
    padding-top: 10%;
    text-align: center;
    font-size: 80%;
    font-weight: 800;

 }
 .des-06
{
    line-height: 230%;
    letter-spacing: 2pt;
    width: 95%;
    text-align-last:center;
    font-size: 45%;
}
}
</style>
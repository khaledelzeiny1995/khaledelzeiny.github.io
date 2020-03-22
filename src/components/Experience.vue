<template>
 <div id = "expereince">


     <p class = "title "> Eduction <p>
     <div class = "eduction-hig" id = "eduction-Hig">
         <P> High school </P>
         <p> The school of Research Sceince </p>
         <p> IGCSE/A level circuum </p>
        <!-- <img src= "./SRS-NEW-LOGO_2O.png"  -->
         </div> <!-- end of the eduction div -->


         <div class = "eduction-uni" id = "eduction-Uni">
         <p> University </p>
         <p> University of Manitoba </p>
         <p> Bachlor of Science in computer Sceince </p>
         <p> 2015 - 2021 </p>
          <img class = "logo" src= "./logo.svg" >
         </div> <!-- end of the eduction uni div -->

         <div class = "work-experience" id = "work-experience">
             <p> Experience </p>
             <p> Lily and Lou </p>
             <p>I am a Full stack Developer trainee . During my internship 
                 I worked on a project , 
                 one of the projects was to create questionnaires using Vue.js framework , Html and CSS for building 
                 a responsive UI and Django Rest framework for building database representation models , managing routes , 
                 views and requests. Currently working on building a customizer using Vue.js for building 
                 responsive UI for the customizer so users can customise there cloth height , width , colour and design there preferred style .</p>    
         </div>
         <!-- this the work expereince div -->

         <div class = "projects" id = "projects">

             <p>Projects</p>
             <p> Portfolio </p>
             <p> building my portfolio using Vue.js , Html and CSS for responsive UI . Also 
                 I am using Django REST framework for 
                 building the contact form routes and requests . 
                 https://github.com/khaledelzeiny1995/khaled-website</p>

           <p> Ezolopy </p>
           <p> I am building a website for a startup company called Ezolopy .
                a responsive UI using react.js , Html and css. Plus , 
               I am using express.js and mongodb to manage routes , 
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

.logo
{
  display: inline-block;
  width: 500px;
  height: 250px;
  object-fit: cover;
  margin: 4%;
  position: relative;
}

.title
{
    text-align: center;
    font-size: 130%;
} 

.eduction-hig
{
    float: left;
    margin-left: 5%;
}

.eduction-uni
{
    float: right;
}





/* Responsive part for the expereince companent */
@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{
    
}
</style>
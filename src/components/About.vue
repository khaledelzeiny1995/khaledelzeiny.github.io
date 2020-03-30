<template>
    <div id = "about">


          <img src= "./me.jpg" class = "profileimg">

          <div class = "text-03">
            <p class= "des-01"> WHO AM I ? </p>
            <p class = "des-02"> I,am computer Sceince student at Univeristy of Manitoba in my last year. I am full stack developer / Softaware Engineeer . Bascailly I am strongly passionte 
              About Coding and Full Stack Development </p>
            </div>
      </div> <!-- end of the about div -->    
</template>


<script>
export default {
    
}
</script>

<style scoped>
.profileimg
{
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 4%;
}

/* section About css */
#about
{
    align-items: center;
    text-align: center;

}

/* describe-01 */

.des-01
{
  letter-spacing: 5pt;
  margin: 2%;
  font-weight: 700;
}

.des-02
{
  line-height: 200%;
} 

/*my profile picture */

@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{

  .profileimg
{
  display: inline-block;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: cover;
  margin: 4%;
}
}
</style>


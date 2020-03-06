<template>
    <div id = "about">


          <img src= "./me.jpg" class = "profileimg">
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


.about-line
{
   width: 30%;
   align-items: center;
}


/*my profile picture */

.text-02
{
  margin:0.1%;
}

@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{

}
</style>


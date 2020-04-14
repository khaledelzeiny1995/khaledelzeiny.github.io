<template>
  <div id="about">
    <img src="./me.jpg" class="profileimg" />

    <div class="text-03">
      <p class="des-01">WHO AM I ?</p>
      <p class="des-02">
        I am a full-stack developer and software engineer. I am currently in my last year of pursuing BSc. in Computer Science with a specialization
        in software engineering at the University of Manitoba, in Manitoba, Canada.
        My passion lies in coding and full-stack development.
      </p>
    </div>
  </div>
  <!-- end of the about div -->
</template>


<script>
export default {};
</script>

<style scoped>
.profileimg {
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin: 4%;
}

/* section About css */
#about {
  align-items: center;
  text-align: center;
}

/* describe-01 */

.des-01 {
  letter-spacing: 5pt;
  margin: 2%;
  font-weight: 700;
}

.des-02 {
  line-height: 200%;
}

@media only screen and (max-width: 1024px) {
  .profileimg {
    display: inline-block;
    width: 50%;
    height: 50%;
    border-radius: 50%;
    object-fit: cover;
    margin: 4%;
  }
  .des-01 {
    font-size: 95%;
  }
  /* Style for the about me section */
  .des-02 {
    line-height: 200%;
    font-size: 80%;
  }
}
@media only screen and (max-width: 960px) {
  .profileimg {
    display: inline-block;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    object-fit: fill;
    margin: 4%;
  }
  .des-01 {
    font-size: 100;
  }
  /* Style for the about me section */
  .des-02 {
    line-height: 200%;
    font-size: 85%;
  }
}

@media only screen and (max-width: 625px)
 { 
   .profileimg {
    display: inline-block;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    object-fit: fill;
    margin: 4%;
  }
  .des-01 {
    font-size: 90%;
  }
  /* Style for the about me section */
  .des-02 {
    line-height: 200%;
    font-size: 75%;
  }
}

@media only screen and (max-width:400px) 
{
     .profileimg {
    display: inline-block;
    width: 30%;
    height: 30%;
    border-radius: 50%;
    object-fit: fill;
    margin: 4%;
  }
  .des-01 {
    font-size: 80%;
  }
  /* Style for the about me section */
  .des-02 {
    line-height: 200%;
    font-size: 70%;
  } 
}
</style>


<template>
  <!-- social media main div -->
  <div id="social-media" class="social-bar">
    <!-- Facebook media logo -->
    <a href="https://www.facebook.com/khaledelzeiny1995" class="social-icon">
      <img src="./icons8-facebook-30.png" />
    </a>

    <!-- Instgram media logo -->
    <a href="https://www.instagram.com/khaledelzeiny95" class="social-icon">
      <img src="./icons8-instagram-50.png" />
    </a>
    <!-- Gmail media logo -->
    <a href="#" class="social-icon">
      <img src="./icons8-gmail-50.png" />
    </a>
    <!-- linkdin media logo -->
    <a href="https://www.linkedin.com/in/khaled-elzeiny-641082137" class="social-icon">
      <img src="./icons8-linkedin-26.png" />
    </a>
    <!-- github media logo -->
    <a href="https://github.com/khaledelzeiny1995/khaled-website" class="social-icon">
      <img src="./icons8-github-32.png" />
    </a>
  </div>
</template>


<script>
export default {
  name: "social-media"
};
</script>


<style scoped>
/* social-media div styling */
.social-bar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 0 30px 0;
}

/* social icon styling */
.social-icon {
  margin-right: 25px;
  filter: grayscale(100%);
  transition: 0.15s ease-in-out;
}

.social-icon:hover {
  filter: grayscale(0);
  transform: scale(1.1);
}

.social-icon img {
  width: 28px;
}

/* Responsive part for the socialmedia companent */
@media only screen and (max-device-width: 480px),
  only screen and (-webkit-min-device-pixel-ratio: 2),
  screen and (-webkit-device-pixel-ratio: 1.5) {

.social-icon img {
  width: 10px;
}
}
</style>
<template>
  <div id = "progressBar">
    <ul>
      <li class = "html">HTML / CSS</li>
      <li class = "java"> JAVA </li>
      <li class = "vue"> Vue / front-End Development </li>
      <li class = "docker"> Docker</li>   
      </ul>

  </div>
</template>

<script>
export default {
  name:"progressBar",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
    position: relative;
    list-style: none;
    margin: 50px 0;
    font-weight: 500;
    text-transform: uppercase;
}

li:before {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
}

li:after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    background-color: rgba(0, 0, 0);
    animation-duration: .7s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
}

li.html:after {
    animation-name: html;
}

@keyframes html {
    to {
        width: 90%;
    }
}

li.java:after {
    animation-name: java;
}

@keyframes java {
    to {
        width: 80%;
    }
}

li.vue:after {
    animation-name: vue;
}

@keyframes vue{
    to {
        width: 75%;
    }
}

li.docker:after {
    animation-name: docker;
}

@keyframes docker {
    to {
        width: 60%;
    }
}
</style>

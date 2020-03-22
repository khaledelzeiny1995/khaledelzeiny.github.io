<template>
  <div id = "progressBar">
    <ul>
        
      <li class = "html">Html</li>
      <li class = "html"> Css </li>
      <li class = "java"> Java</li>
      <li class = "java"> python </li>
      <li class = "docker"> Docker cloud platform </li> 
      <li class = "vue"> Vue.js</li>
      <li class = "react"> React.js</li> 
      <li class = "django">Django REST framework </li> 
      <li class = "node"> Node.js / Express.js</li> 
      <li class = "git"> Git / Github </li> 

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



/* HTML and CSS bar */
li.html:after {
    animation-name: html;
}

@keyframes html {
    to {
        width: 70%;
    }
}

/* Java and Python bar */
li.java:after {
    animation-name: java;
}

@keyframes java {
    to {
        width: 65%;
    }
}

/* Vue bar */
li.vue:after {
    animation-name: vue;
}

@keyframes vue{
    to {
        width: 75%;
    }
}

/* docker bar */
li.docker:after {
    animation-name: docker;
}

@keyframes docker {
    to {
        width: 60%;
    }
}

/* react bar */
li.react:after {
    animation-name: react;
}

@keyframes react {
    to {
        width: 40%;
    }
}
/* node bar */
li.node:after {
    animation-name: node;
}

@keyframes node {
    to {
        width: 50%;
    }   
}

/* django bar */
li.django:after {
    animation-name: django;
}

@keyframes django {
    to {
        width: 40%;
    }   
}

/* git bar */
li.git:after {
    animation-name: git;
}

@keyframes git {
    to {
        width: 70%;
    }   
}

/* resposive part for thr porgressBar */

@media only screen and (max-device-width: 480px), only screen and (-webkit-min-device-pixel-ratio: 2) , screen and (-webkit-device-pixel-ratio:1.5)
{

}
</style>

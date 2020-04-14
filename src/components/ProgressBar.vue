<template>
  <div id = "progressBar">
    <ul>
        
      <li class = "html" id ="liststlye">Html</li>
      <li class = "html" id ="liststlye"> Css </li>
      <li class = "java" id ="liststlye"> Java</li>
      <li class = "java" id ="liststlye" > Python </li>
      <li class = "docker" id ="liststlye"> Docker cloud platform </li> 
      <li class = "vue" id ="liststlye"> Vue.js</li>
      <li class = "react" id ="liststlye"> React.js</li> 
      <li class = "django" id ="liststlye" >Django REST framework </li> 
      <li class = "node" id ="liststlye" > Node.js / Express.js</li> 
      <li class = "git" id ="liststlye" > Git / Github </li> 

      </ul>
  </div>
</template>

<script>
export default {
  name:"progressBar",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#liststlye {
    position: relative;
    list-style: none;
    margin: 50px 0;
    font-weight: 500;
}

#liststlye:before {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
}

#liststlye:after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    background-color: rgba(0, 0, 0);
    animation-duration: 4s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
}



/* HTML and CSS bar */
li.html:after {
    animation-name: html;
}

@keyframes html {
    0%{
        width: 0%;
    }
    100%
    {
        width:70%;
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

@media (max-device-width: 1024px)
{
#liststlye {
 position: relative;
 list-style: none;
 margin: 50px 0;
 font-size: 95%;
 text-align: left;
}

#liststlye:before {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
}

#liststlye:after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    background-color: rgba(0, 0, 0);
    animation-duration: 4s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
 }
}
@media (max-device-width: 960px)
{
    #liststlye {
 position: relative;
 list-style: none;
 margin: 50px 0;
 font-size: 85%;
 text-align: left;
}

#liststlye:before {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
}

#liststlye:after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    background-color: rgba(0, 0, 0);
    animation-duration: 4s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
}
}


@media (max-device-width: 625px)
{
    #liststlye {
 position: relative;
 list-style: none;
 margin: 50px 0;
 font-size: 75%;
 text-align: left;
}

#liststlye:before {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.5);
}

#liststlye:after {
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 0;
    height: 15px;
    background-color: rgba(0, 0, 0);
    animation-duration: 4s;
    animation-timing-function:ease-in-out;
    animation-fill-mode: forwards;
}
}




</style>

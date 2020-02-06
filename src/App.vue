<template>
    <div id="app">

        <header>
        <link rel="stylesheet" href="animate.min.css">
      <div class = "container-navbar">
        <img src = "./assets/Khaled.png" alt = "logo" class = "logo" >
         <nav>
          <ul>
           <li><router-link to = "/">Home</router-link></li>
           <li><router-link to ="/about">About</router-link></li>
           <li><router-link to ="/exp">Expereince</router-link></li>
           <li><router-link to ="/Contact">Contact</router-link></li>      
          </ul>
          </nav>
      </div> <!-- End of nav bar div -->
      </header>
        <transition name = "router-anim">
        <router-view/>
        </transition>
      </div> <!-- End of the main app -->

</template>

<script>

export default {
  
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   background: #FFFAFA;
}
.logo
{
   display: block;
   max-width: 2.5%;
   height: auto
}

/* this is the css For Nav-bar */
.container-navbar
{
  width:80%;
  margin: 0 auto;
  border: #191919;
}
header
{
  background: #FFFAFA;
}

header::after
{
  content: '';
  display: table;
  clear:both;
}
.logo
{
  float:left;
  padding: 10px 0;
}

nav
{
  float:right;
}

nav ul
{
  margin:0;
 padding:0;
 list-style: none;
}
nav li
{
  display: inline-block;
  margin-left:70px;
  padding-top:15px;
  position: relative;
}

nav a
{
  color:#191919;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
}
nav a:hover
{
  color: #191919;
}

nav a::before
{
  content: '';
  display: block;
  height: 5px;
  background-color:#191919;

  position: absolute;
  top:0;
  width: 0%;

  transition: all ease-in-out 250ms;

}

nav a:hover::before
{
  width : 100%;
}

</style>
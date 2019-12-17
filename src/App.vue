<template>
  <div id="app">
    <div id = "header">
       <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    </div> <!-- end of the head bar -->
<div id = "body">
    <div> 
      <section id ="home " >
        <div>
      <img src = "./assets/Khaled-Elzeiny.jpg">
      <h1> this khaled Elzeiny </h1>
      </div>
      </section>
      </div>
      <div> 
        <section id ="about">
          <h1>About Me</h1>
          <p> I Egptian , from cairo currently living in Canada , Manitoba - winniepeg. I am pursing my eduction in university of winnipeg , bachlor of science in computer science  </p>
        </section>
        </div>

        <div>
          <section id ="experience">
            <h2> here is a peak of my experience </h2>
            <li> currently working in lily and lou as software engineer (Front-End developer) </li>
             <li> good expereince in javascript , html and css </li>
               <li> good expereince in cloud platform docker </li>
                 <li> expereince in python and django rest framwork </li> 
          </section>
        </div>

        <div>
          <section id = "contact">
            <h2> Contact me </h2>
            <p> you can conctact me here </p>

            <ul>
              <li> <a href = ""> Facebook </a></li>
              <li><a href = ""> Instgram </a> </li>
              <li> <a href = ""> LinkedIn </a> </li>
              <li> <a href = ""> github </a></li>
              </ul>
              <p> you can send my email here </p>
          </section>
          </div>
      </div>    
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
[div="app"] {
    margin: 0;
    margin-top: 50px;
    font-family: sans-serif;
}

header {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    background-color: #eee;
}

[div="header"] * {
    display: inline;
    height: 50px;
}

[div="header"] ul {
    padding: 0;
}

[div="header"] li {
    margin-left: 20px;
}

section {
    height: 100vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    background-size: cover; /* Add this line */
    background-position: center center; /* Add this line */
    background-repeat: no-repeat; /* Add this line */
    background-attachment: fixed; /* Add this line */
}

#hero .profile-img {
    width: 300px;
    border-radius: 50%;
}

footer {
    text-align: center;
    padding: 50px;
}

#hero h1 {
    font-size: 3em;
}

section h2 {
    font-size: 2.5em;
}

section h3 {
    font-size: 1.5em;
}

header a {
    text-decoration: none;
    color: black;
}

/* Add everything below here */

#hero {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/field.jpg');
}

#about {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/beach.jpg');
}

#contact {
    background-image: linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)), url('https://codetheweb.blog/assets/img/posts/steps-to-creating-a-website/canyon.jpg');
}
</style>

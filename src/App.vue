<template>
  <div id="app">
    <section id="Home">
     <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Khaled Elzeiny 
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#Home">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#About">About</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#Expereince">Expereince</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#Contact">Contact</a>
      </vs-navbar-item>
    </vs-navbar>

    <h1>Welcome To</h1>
    <h2> Khaled Elzeiny Website </h2>

  </section>
  <section id="About">
    here i am going to talk about my self , my life , my hoppy , and what i engoy 
  </section>

  <section id="Expereince">
    here i am going to talk about my expeerince in coding and bar for each coding expereince 
  </section>

  <section id="contact">

    contaxt , inculde facebook , github , linkedin , and otherr 
  </section>
  </div>
</template>

<script>

export default {
  name: 'app',
  data()
  {
    return{
      activeItem: 0,
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <!--<header class="blumHeader"><span>Blum</span></header>-->
    <router-view />
  </div>
</template>

<script>
// import Component from '@/components/Component.vue'

export default {
  name: "App",
  components: {
    // Component
  }
};
</script>

<style>
html,
body {
  margin: 0px;
}
a {
  margin: 0px;
  text-decoration: none;
}
#app {
  font-family: Montserrat, sans-serif;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-size: 25px;
  font-weight: 300;
}
h1 {
  font-size: 45px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.styledLink {
  color: black;
  text-decoration: none;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.linkContainer {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  transition: all 0.3s;
}
.linkContainer:hover {
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
}
.linksContainerMain {
  height: 20%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.container {
  z-index: 0;
  margin: 0px;
  display: flex;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  /*  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(107, 107, 182, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );*/
  background: rgb(238, 218, 174);
  background: radial-gradient(
    circle,
    rgba(238, 218, 174, 1) 0%,
    rgba(132, 178, 232, 1) 100%
  );
}
.col {
  width: 80%;
  display: block;
  text-align: center;
  margin: 0 auto;
}
.blumHeader {
  width: 100vw;
  height: 50px;
  background: rgb(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
}
.blumHeader > span {
  display: inline-block;
  height: 50px;
  width: 150px;
  background: #ff8600;
  font-size: 40px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  text-shadow: -1px -1px black;
}
.heroText > h1 {
  display: flex;
}
.heroText {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

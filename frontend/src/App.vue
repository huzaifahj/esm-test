<template>
  <div id="app">
    <!-- Header -->
    <div class="header">
      <div class="container">
        <div class="row">
          <div class="col">
            <img @click="$router.push('/')" src="@/assets/logo.svg" alt="ESM Logo" />
          </div>
        </div>
      </div>
    </div>
    <!-- Current Page -->
    <router-view />
  </div>
</template>

<style>
:root {
  --primary-color: #00a8e1;
  --opposite-color: white;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");
* {
  font-family: Poppins;
}

#app {
  margin-bottom: 300px;
}

.container {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
}

.header img {
  height: 100px;
  width: auto;
  cursor:pointer;
}

.header {
  background-color: var(--primary-color);
  padding:50px 0;
  margin-bottom:50px;
}

button, .button {
  border:0;
  outline:0;
  background-color: var(--primary-color);
  border-radius:4px;
  padding:10px;
  color:var(--opposite-color);
  cursor:pointer;
  text-decoration: none;
}

.loader {
  height:20px;
  width:auto;
}

.info-label {
  text-transform: uppercase!important;
  letter-spacing: 1px;
  opacity:0.6;
}
</style>

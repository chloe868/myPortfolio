<template>
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="firstCol">
          <img src="../assets/che.png">
          <br>
          <hr>
          <h2><b>Cherry Mae B. Herrera</b></h2>&nbsp;
          <div class="qoute">
            <vue-typed-js :strings="['Great things come from<br>hard work and perseverance.<br> No excuses.<h5>~ Kobe Bryant</h5>']">
              <h1 class="typing"></h1>
            </vue-typed-js>
          </div>
        </div>
      </div>
      <div class="facts col-md-6 cardlist">
        <h1><b>About Me</b></h1>
          <div class="card">
            <div class="card-body">
              <h1 class="card-title">Back-end Developer</h1>
            </div>
          </div>
          <br>
          <div class="card text-center">
            <div class="card-body">
              <h1 class="card-title">Competent Individual</h1>
            </div>
          </div>
          <br>
          <div class="card text-center">
            <div class="card-body">
              <h1 class="card-title">"Obstacles are not a hindrance to success"</h1>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped="scss">
@media screen and (max-width: 800px) {
  .facts[data-v-5b73b634] {
    margin-top: 0%;
    text-align: center;
  }
}
.container {
  margin-top: 27vh;
  height: 100%;
  width: 100%;
}
.facts {
  margin-top:-15%;
  text-align: center;
}
.cardlist {
  padding: 30px;
}
.firstCol{
  margin-top: -30%;
  color: white;
  text-align: center;
}
img {
  width: 250px;
  border-radius: 50%;
}
.qoute {
  background-color: black;
  padding: 5px;
  border-radius: 20px;
  color: white;
  height: 30%;
  width: 100%;
}
hr {
  height: 1px;
  background-color: black;
}
h1 {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
  width: 100%;
}
h5 {
  font-style: italic;
}
h2 {
    color: black;
}
.card {
  background-color: black;
  padding: 5px;
  border-radius: 20px;
  color: white;
  height: 25%;
  width: 100%;
  transition: all .2s ease-in-out;
}
.card:hover, .qoute:hover{
    transform: scale(1.1);
    transition-duration: 0.5s;
}
</style>
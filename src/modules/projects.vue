<template>
    <div>
        <v-hover v-slot:default="{ hover }">
            <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
            >
            <v-img
                :aspect-ratio="16/11"
                src="../assets/abangFinal.png"
            >
                <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey v-card--reveal display-1 black--text"
                    style="height: 100%;"
                ><p>Abang is a web application which helps tourists both local and foreign to rent a specific things. Things just like car, van, bicycle, motorcycle, or anything that they want to rent to any company rentals. The programming languages that was being used in this web application are the following: Vue.js for the Frontend, Node.js for the Backend and MongoDB serves as our Database.</p>
                </div>
                </v-expand-transition>
            </v-img>
            <v-card-text
                class="pt-6"
                style="position: relative;"
            >
                <h3 class="display-1 font-weight-bold orange--text mb-2">Abang</h3>
                <div class="font-weight-light title mb-2">
                    "Where Rent Anything Tangible Happens!"
                </div>
            </v-card-text>
            </v-card>
        </v-hover>
        <v-hover v-slot:default="{ hover }">
            <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
            >
            <v-img
                :aspect-ratio="16/11"
                src="../assets/pn.png"
            >
                <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out grey v-card--reveal display-1 black--text"
                    style="height: 100%;"
                ><p>Parent's Counterpart Management System is a system which bridges PN students and Admin Staff. 
          This application makes the monthly fee of every students be easily traced and be followed-up every month. 
          The programming languages that was being used in this web application are the following: XHTML for the Frontend, PHP Laravel for the Backend and MySQL serves as our Database.</p>
                </div>
                </v-expand-transition>
            </v-img>
            <v-card-text
                class="pt-6"
                style="position: relative;"
            >
                <h3 class="display-1 font-weight-bold orange--text mb-1">Parent's Counterpart Management System</h3>
                <div class="font-weight-light title mb-2">
                    "Your Partner in Management!"<br>
                </div>
            </v-card-text>
            </v-card>
        </v-hover>
    </div>
</template>
<style scoped="scss">
.mx-auto{
    margin-top:3%;
}
p{
    font-size: 20px;
    text-align: center;
    font-weight: bold;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>
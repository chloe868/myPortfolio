<template>
  <div class="split">
    <center>
        <div class="image background">
            <img src="../assets/Resume.png">
            <br>
            <button class="btn btn-outline-info" @click="downloadFile"><i class="fa fa-download"></i> Download</button>
        </div>
    </center>
  </div>
</template>
<style scoped>
@media screen and (max-width: 800px) {
  img[data-v-5be1ad4e] {
    width: 100%;
  }
  button[data-v-5be1ad4e] {
    width: 50%;
  }
  .image[data-v-5be1ad4e] {
    margin-top: 5%;
    width: 90%;
    border-style: outset;
    border: solid black;
  }
}
button {
  width: 20%;
  margin-bottom: 50px;
}
.split {
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
}
.image {
  margin-top: 2%;
  width: 60%;
  border-style: outset;
  border: solid black;
}
img {
  width: 100%;
}
</style>
<script>
import axios from "axios";
export default {
    name: 'Resume', 
    data() {
        return {
          fileUrl: require('../assets/Resume.png') 
        }
    },
    methods: {
      downloadFile(){
        axios({
          url: this.fileUrl,
          method: 'GET',
          responseType: 'blob',
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'resume.png');
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      } 
  }  
};
</script>
<template>
  <mdb-container class="mt-5">
    <mdb-card>
      <mdb-card-title class="mt-4 h2">Contact Information</mdb-card-title>
      <mdb-card-body>
        <mdb-card-text
          class="pr-5 pl-5"
          mr-4
          ml-4
        >I'd love to hear something from you</mdb-card-text>
        <form class="gform pure-form pure-form-stacked contact-form" @submit.prevent="sendEmail">
          <mdb-row>
            <mdb-col md="8">
              <mdb-row class="marginForm">
                <mdb-col for="name">
                  <mdb-input class="inputStyle" id="name" name="from_name" label="Name" />
                </mdb-col>
                <mdb-col for="email">
                  <mdb-input class="inputStyle" id="email" name="user_email" type="email" label="Your email" required />
                </mdb-col>
              </mdb-row>
              <mdb-row class="marginForm">
                <mdb-col for="message">
                  <mdb-input
                    id="message" 
                    class="inputStyle"
                    name="message"
                    type="textarea"
                    label="Your message"
                    required
                  />
                </mdb-col>
              </mdb-row>
            </mdb-col>
            <mdb-col md="4">
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="map-marker-alt" size="2x" />
                  <p>San Alberto Formation Center, Nasipit Talamban, Cebu</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="phone" size="2x" />
                  <p>+63 926 975 3710</p>
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col class="mt-4">
                  <mdb-icon icon="envelope" size="2x" />
                  <p>cherrymae.herrera@student.passerellesnumeriques.org</p>
                </mdb-col>
              </mdb-row>
            </mdb-col>
          </mdb-row>
          <mdb-btn color="primary" class="float-left" type="submit" value="Send">Send</mdb-btn>
        </form>
      </mdb-card-body>
    </mdb-card>
  </mdb-container>
</template>
<style scoped>
  .float-left{
      height: 40px;
      width: 80px;
    }
  .container {
    text-align: center;
    height: 100%;
  }
  @media screen and (max-width: 800px){
    .mt-5{
      height: 100%;
    }
    .card {
      margin-top: 3%;
    }
    .marginForm[data-v-2a19d6cf] {
      margin-top: 0px;
    }
  }
  .marginForm {
    margin-top: 50px;
  }
  .mt-5{
    background-color: black;
  }
  .inputStyle{
      font-weight: bold;
  }
  
</style>
<script>
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
export default {
  data() {
        return {
        }
    },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('default_service', 'sendemail', e.target, 'user_Uv3DtCzQH0TyeRg0kvU9M')
        .then((result) => {
          Swal.fire(
            'Your message has been sent!',
            'Thank you for your feedback and queries!',
            'success'
          )
          e.target.user_email.value = ''
          e.target.from_name.value = ''
          e.target.message.value = ''
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

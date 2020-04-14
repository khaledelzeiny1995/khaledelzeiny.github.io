<template>
  <div id="Contact">
    <!-- title of the contact Form -->

    <form id="Contact-form0" action="https://formspree.io/maydljzz" method="POST" @click=" onSubmit('event')">
      <div class="Contact-form">
        <input type="text" name = "name" class="formStyle" value placeholder="Name" v-model="User.name" required />

        <input
          type="email"
          class="formStyle"
          name = "_replyto"
          placeholder="name@email.com"
          v-model="User.email"
          required
        />

        <textarea name="message"
          class="formStyle"
          form="Contact-form"
          required
          placeholder="Message"
          v-model="User.message"
        ></textarea>
      </div>
      <input type="submit" class="submit" value="SUBMIT"  />
    </form>
  </div>
  <!-- end of the Contact div -->
</template>


<script>
import axios from 'axios'



export default {
  name: "contact",
  data() {
    return {
      // user object that store user input
      User: {
        name: "",
        email: "",
        message: ""
      }
    }; 
  },
  methods: {

    /* on submit to send it to the server */
    onSubmit(event)
    {
      event.preventDefault();

        let newUser = {
        name: this.User.name,
        email: this.User.email,
        message: this.User.message
      };

      console.log(newUser);

       axios.post('http://localhost:20000/users/add' , newUser)
      .then((response) =>{
        console.log(response.data);
        alert('Thank you for Contacting Me.');
        return false;                                                                                     
      })
      .catch((error) => {
        console.log(error);
      });
    },

  }
};
</script>



<style scoped>


#contact {
  align-content: center;
  align-items: center;
  margin:0;
}

/* contact form title */

form {
  margin-top: 4%;
  transition: all 4s ease-in-out;
  align-self: center;
  color:#191919;
}

/* postion of the div of the contact form */
.contact-form {
  margin-top: 2%;
  text-align: center;
  align-items: center;
  position: relative;
  margin-left: 20%;
  color:#191919;
}
/* style for the form for each input */
.formStyle {
  width: 60%;
  margin: 1%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #191919;
  color: #191919;
  font-size: 100%;
}

.submit {
  background: #191919;
  color: #fffafa;
  border-color: transparent;
  width: 20%;
  height: 60px;
  margin-top: 5%;
  font-size: 120%;
  margin-left: 22%;
  align-items: center;
  text-align: center;
}
.submit:hover
{
  background-color: #fffafa;
  color:#191919;
}
.submit:v
{
  background-color:#fffafa;
  color: #191919;
}
@media only screen and (max-device-width: 1024px)
{
  .Contact-title {
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  .Contact-title p {
    font-size: 120%;
  }

  form {
    margin-top: 4%;
  }
  /* style for the form for each input */
  /* postion of the div of the contact form */
  .contact-form {
    margin-top: 4%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  /* style for the form for each input */
  .formStyle {
    width: 60%;
    margin: 1%;
    background: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid #191919;
    color: #191919;
    font-size: 70%;
  }

  /* sumbit button */
  .submit {
    position: relative;
    margin-top: 10%;
    background: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 20%;
    height: 30px;
    font-size: 65%;
    -webkit-appearance: none;
  }
}

@media only screen and (max-device-width: 960px)
{
/* sumbit button */
  .submit {
    position: relative;
    margin-top: 10%;
    background: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 20%;
    height: 30px;
    font-size: 65%;
    -webkit-appearance: none;
  }
}

@media only screen and (max-device-width: 625px)
{
  /* sumbit button */
  .submit {
    position: relative;
    margin-top: 10%;
    background: #191919;
    color: #fffafa;
    border-color: transparent;
    width: 20%;
    height: 30px;
    font-size: 65%;
    -webkit-appearance: none;
  }
}
</style>






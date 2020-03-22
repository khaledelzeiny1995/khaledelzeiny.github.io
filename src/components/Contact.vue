<template>

 <div id = "Contact">
    <form @submit= "checkForm" >

    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
    <ul>
       <li v-for= "error in errors" :key= "error">
           {{ error }}
        </li>
    </ul>
  </p>     
     
     <div class = "Contact-title"> 
       <p> Contact Me</p>
       </div>

       <div class = "contact-form">
    <p class = "firstName"> 
      <input id="firstname" class = "formStyle" v-model= "firstname" type="text" name="firstname" placeholder="Your First Name" >
    </p>

    <p> 
      <input id="lastname" class = "formStyle" v-model= "lastsname" type="text" name="lastname" placeholder="Your Last Name" >
    </p>


    <p>
    <input id="email"  class = "formStyle" v-model="email" type="email" name="email" placeholder="Your Email">
    </p>

     <p>
    <textarea id="message" class = "formStyle" v-model= "messsage" type="text" name="message" placeholder="Your Message Here" rows="5">
    </textarea>
    </p>
    <p>
      <input  class ="submit" type="submit" value="SUBMINT">
    </p>

       </div> <!-- end of the contact form -->


    </form> <!-- end of form -->
  </div> <!-- end of contact div -->
</template>


<script>
export default {
    name:'Contact',
    data()
    {
        return{
           errors:[],
           firstName:null,
           lastName:null,
           email:null,
           messsage:null,
        }
    },

    methods:
    {
         checkForm(e)
         {
             this.errors = [];

             if (!this.firstName) 
             {
                   this.errors.push("Please Enter your First Name.");
                 }

              if(!this.lastName)
              {
                  this.errors.push("Please Enter your Lasr Name.")
              }
                if (!this.email) 
                {
                  this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) 
                {
                 this.errors.push('Valid email required.');
                 }

             if (!this.errors.length) {
             return true;
             } 
              e.preventDefault();
         },

          validEmail(email) {

            /* eslint-disable-next-line */
             var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regexp.test(email);
       }
    }
}
</script>

<style scoped>
.Contact-title
{
  text-align: center;
  position: relative;
  margin-top: 10%;
 
}
.Contact-title p
{
  font-size: 140%;
  position: relative;
}
form
{
  margin-top: 4%;
  transition: all 4s ease-in-out;
}

/* postion of the div of the contact form */
.contact-form
{
 
 margin-top: 2%;
 text-align: center;


}
/* style for the form for each input */
.formStyle
{
  width: 60%;
  margin: 1%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #191919;
  color: #191919;
  font-size: 100%;
}

.submit
{
  background: #191919;
  color: #FFFAFA;
  border-color: transparent;
  width: 20%;
  height:60px;
  margin: 2%;
  font-size:120%;
}


@media only screen and (max-device-width: 480px), 
only screen and (-webkit-min-device-pixel-ratio: 2) , 
screen and (-webkit-device-pixel-ratio:1.5){

.Contact-title
{
  text-align: center;
  position: relative;
  top: 50%;
  left:50%;
  transform: translate(-50%, 50%);
}
.Contact-title p
{
  font-size: 120%;
}

form
{
  margin-top: 4%;
 
}
/* style for the form for each input */
/* postion of the div of the contact form */
.contact-form
{
 
 margin-top: 4%;
 text-align: center;


}
/* style for the form for each input */
.formStyle
{
  width: 60%;
  margin: 1%;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #191919;
  color: #191919;
  font-size: 100%;
}

/* sumbit button */
.submit
{
  background: #191919;
  color: #FFFAFA;
  border-color: transparent;
  width: 20%;
  height:20px;
  margin: 2%;
  font-size:80%;
}


}
</style>
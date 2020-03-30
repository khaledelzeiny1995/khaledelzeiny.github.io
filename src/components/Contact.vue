<template>

 <div id = "Contact">
   
    <!-- title of the contact Form --> 
    
      <form id  = "Contact-form">

        <div class = "Contact-form">

        <input type = "text" class = "formStyle" value= "" placeholder="Name" required>

        <input type = "email" class = "formStyle" value="" placeholder="name@email.com" required >

        <textarea name="comment" class = "formStyle"  form="Contact-form" required placeholder ="Message"></textarea>

        </div>
        <input type= "submit"  class ="submit"  value="SUBMIT">

      </form>


</div> <!-- end of the Contact div -->

</template>


<script>

</script>



<style scoped>


#contact
{
  align-content: center;
  align-items: center;
  margin-left: 10%;
}

/* contact form title */

form
{
  margin-top: 4%;
  transition: all 4s ease-in-out;
  align-self: center;
}

/* postion of the div of the contact form */
.contact-form
{
 
 margin-top: 2%;
 text-align: center;
 align-items: center;
 position: relative;
 margin-left: 10%;

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
  margin-top: 5%;
  font-size:120%;
  margin-left:22%;
  align-items: center;
  text-align: center;
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
  position: relative;
  margin-top: 10%;
  background: #191919;
  color: #FFFAFA;
  border-color: transparent;
  width: 20%;
  height:20px;
  font-size:80%;
}


}
</style>






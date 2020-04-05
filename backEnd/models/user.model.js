const mongoose = require('mongoose');



const Schema = mongoose.Schema;


const userSchema = new Schema(
    {
        name:
        {
            type: String,
            required: true,
            minlength:3,
        },

        email:
        {
            type:String,
            required:true,
        },

        message:
        {
            type:String,
            required:true,
        }



    }
)



    const User = mongoose.model('User' , userSchema);
    

    module.exports = User;


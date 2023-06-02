const mongoose=require('mongoose');
const LoginSchema=mongoose.Schema(
    {
        username: {
            type: String,
            required: true
          },
        password : {
          type: String,
          required: true
        },
        is_admin:{
          type: Boolean,
          required:false,
          default:false,
        },
       
    }
);
var LoginModel=mongoose.model('Logins',LoginSchema);
module.exports={LoginModel}
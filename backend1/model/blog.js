const mongoose=require('mongoose');
const BlogSchema=mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            default:"test"
          },
        author : {
          type: String,
          required: true,
          default:"test"
        },
        date:{
            type: String,
            required: true,
            default:"test"
          },
        content : {
            type: String,
            required: true,
            default:"test"
          },
    }
);
var BlogModel=mongoose.model('Blogs',BlogSchema);
module.exports={BlogModel}
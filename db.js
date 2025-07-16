
// new schema
const { default: mongoose } = require("mongoose")

const newSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

})

const news = mongoose.model('news',newSchema);

const article = new news({
    title:" breaking news ",
    description:"its the news." 
})

article.save().then(()=>{
    console.log("article is saved")
}).catch((err)=>{
    console.error("article is not saved",err)
})

module.exports = news
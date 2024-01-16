const mongoose=require('mongoose')

const venderMasterSchema=new mongoose.Schema({
    ID:String,
    Name:String,
    Rickshaw_No:String,
    Mobile_No:String,
})

module.exports= mongoose.model('venderMaster',venderMasterSchema)
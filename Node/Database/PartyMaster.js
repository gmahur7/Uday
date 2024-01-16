const mongoose=require('mongoose')

const PartyMasterSchema=new mongoose.Schema({
    ID:String,
    Name:String,
    Gst_No:String,
    Type:String,
    Address:String,
    Mobile:String,
    Qty:String,
})

module.exports= mongoose.model('PartyMaster',PartyMasterSchema)
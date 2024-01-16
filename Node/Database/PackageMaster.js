const mongoose=require('mongoose')

const PackageMasterSchema=new mongoose.Schema({
    ID:String,
    partymaster_id:String,
    private_marka:String,
    Quantity:String,
})

module.exports= mongoose.model('PackageMaster',PackageMasterSchema)
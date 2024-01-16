const mongoose=require('mongoose')

const PackageTransMasterSchema=new mongoose.Schema({
    ID:String,
    packagemaster_id:String,
    vendermaster_id:String,
    Date:String,
    Quantity:String,
})

module.exports= mongoose.model('Package_Trans_Master',PackageTransMasterSchema)
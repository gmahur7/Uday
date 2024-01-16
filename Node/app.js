require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(cors())

//---------------------Party Master route-----------------------------------------------------------
const {partymasterreg,partymasterget}=require('./Controllers/PartyMaster')
app.post('/api/partymaster/registartion',partymasterreg)
app.get('/api/partymaster/get',partymasterget)

//---------------------Package Master route-----------------------------------------------------------
const {packagemasterreg,packagemasterget,packagemastersearch}=require('./Controllers/PackageMaster')
app.post('/api/packagemaster/registartion',packagemasterreg)
app.get('/api/packagemaster/get',packagemasterget)
app.post('/api/packagemaster/search',packagemastersearch)

//---------------------Vendor Master route-----------------------------------------------------------
const {vendermasterreg,vendermasterget,vendermastersearch}=require('./Controllers/VenderMaster')
app.post('/api/vendermaster/registartion',vendermasterreg)
app.get('/api/vendermaster/get',vendermasterget)
app.post('/api/vendermaster/search',vendermastersearch)

//---------------------Package Trans Master route-----------------------------------------------------------
const {packagetransmasterreg,packagetransmasterget}=require('./Controllers/Package_Trans_Master')
app.post('/api/package_trans_master/registartion',packagetransmasterreg)
app.get('/api/package_trans_master/get',packagetransmasterget)

//---------------------Start Server ------------------------------------------------------------------
app.listen(port,'127.0.0.1',()=>
{
    console.log("Server Is Running @ ",port)
})

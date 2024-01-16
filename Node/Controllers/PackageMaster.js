require('../Database/config')
const PackageMaster = require('../Database/PackageMaster')

const packagemasterreg = async (req, resp) => {
    try {
        let data = new PackageMaster(req.body)
        data = await data.save()
        if (data._id) resp.status(200).send({ msg: "Successfull" })
        else throw new Error("Failed")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const packagemasterget = async (req, resp) => {
    try {
        let data = await PackageMaster.find()
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const packagemastersearch = async (req, resp) => {
    try {
        let data = await PackageMaster.find({ private_marka: { $regex: new RegExp(req.body.inp, 'i') }})
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}


module.exports = {
    packagemasterreg,
    packagemasterget,
    packagemastersearch
}
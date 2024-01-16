require('../Database/config')
const VenderMaster = require('../Database/VenderMaster')

const vendermasterreg = async (req, resp) => {
    try {
        let data = new VenderMaster(req.body)
        data = await data.save()
        if (data._id) resp.status(200).send({ msg: "Successfull" })
        else throw new Error("Failed")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const vendermasterget = async (req, resp) => {
    try {
        let data = await VenderMaster.find()
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const vendermastersearch = async (req, resp) => {
    try {
        let data = await VenderMaster.find({ Name: { $regex: new RegExp(req.body.inp, 'i') }})
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}


module.exports = {
    vendermasterreg,
    vendermasterget,
    vendermastersearch
}
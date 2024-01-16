require('../Database/config')
const PartyMaster = require('../Database/PartyMaster')

const partymasterreg = async (req, resp) => {
    try {
        let data = new PartyMaster(req.body)
        data = await data.save()
        if (data._id) resp.status(200).send({ msg: "Successfull" })
        else throw new Error("Failed")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const partymasterget = async (req, resp) => {
    try {
        let data = await PartyMaster.find()
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}


module.exports = {
    partymasterreg,
    partymasterget
}
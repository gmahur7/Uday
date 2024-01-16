require('../Database/config')
const PackageTransMaster = require('../Database/Package_Trans_Master')

const packagetransmasterreg = async (req, resp) => {
    try {
        let data = new PackageTransMaster(req.body)
        data = await data.save()
        if (data._id) resp.status(200).send({ msg: "Successfull" })
        else throw new Error("Failed")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}

const packagetransmasterget = async (req, resp) => {
    try {
        let data = await PackageTransMaster.find()
        if (data[0]) resp.status(200).send(data)
        else throw new Error("Failed To Get")
    } catch (error) {
        console.log(error);
        resp.status(400).send(error)
    }
}


module.exports = {
    packagetransmasterreg,
    packagetransmasterget
}
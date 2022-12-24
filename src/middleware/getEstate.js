import EstateModel from "../models/EstateModel.js";

export default async function getEstate(req, res) {
    const {id} = req.params;
    try {
        const estate = await EstateModel.findById(id);
        res.status(200).send(estate);
    } catch (error) {
        res.status(500).send({ message: error.message });
        console.log("Pas trouvé");
    }
}
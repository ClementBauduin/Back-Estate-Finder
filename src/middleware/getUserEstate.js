import EstateModel from "../models/EstateModel.js";

export default async function getUserEstate(req, res) {
    const {username} = req.params;
    try {
        const estates = await EstateModel.find({ seller: username });
        res.status(200).send(estates);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }   
}
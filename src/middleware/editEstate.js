import EstateModel from "../models/EstateModel.js";

export default async function editEstate(req, res) {
    const { id } = req.params;
    const { type, price, rooms,size,address,city,state,zip } = req.body;
    console.log(type, price, rooms,size,address,city,state,zip)
    console.log(req.body)
    // find the estate by id and update it with the values from the request body and save it
    try {
        const estate = await EstateModel.findByIdAndUpdate(id, { type, price, rooms,size,address,city,state,zip }, { new: true });
        res.status(200).send("Estate updated");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}
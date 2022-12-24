import EstateModel from '../models/EstateModel.js';

export default async function saveEstateDb(req, res) {
    const seller = req.user.username;
    //save input from req.body to mongodb with EstateModel and save img path in req.files to mongodb
    const { type, price, rooms, size, address, city, state, zip } = req.body;
    const files = req.files;
    const pathArray = [];
    
    files.forEach((file, index) => {
        pathArray.push({ [`img${index + 1}`]: file.filename });
    });

    const newEstate = new EstateModel({
        seller: seller,
        type: type,
        price: parseInt(price),
        rooms: parseInt(rooms),
        size:parseInt(size),
        address: address,
        city: city,
        state: state,
        zip: zip,
        images: pathArray,
    });

    try {
        await newEstate.save();
        
        res.status(200).send({ message: "Estate added successfully" });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
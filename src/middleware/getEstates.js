import EstateModel from "../models/EstateModel.js";

export default async function getEstates(req, res) {
    
    const { price = undefined, rooms = undefined, size = undefined } = req.query || {};
    //if price,rooms and size are defined we need to convert them to numbers
    const type = req.query.type ? req.query.type : undefined;
    const priceNumber = price ? Number(price) : undefined;
    const roomsNumber = rooms ? Number(rooms) : undefined;
    const sizeNumber = size ? Number(size) : undefined;
    const zip = req.query.zip === 'undefined' ?  undefined : req.query.zip;

    //Find estates by filter if they are defined
    try {
        // Create an empty query object
        const query = {};

        // If the type parameter is defined, add it to the query object
        if (type) {
            query.type = type;
        }

        // If the price parameter is defined, add it to the query object
        if (priceNumber) {
            query.price = {$lte: priceNumber};
        }

        // If the rooms parameter is defined, add it to the query object
        if (roomsNumber) {
            query.rooms = {$gte: roomsNumber};
        }

        // If the size parameter is defined, add it to the query object
        if (sizeNumber) {
            query.size = {$gte : sizeNumber};
        }

        // If the zip parameter is defined, add it to the query object
        if (zip) {
            query.zip = zip;
        }

        console.log(query)
                    
        // Find the estates based on the query object
        const estates = await EstateModel.find(query);
        res.status(200).send(estates);
    } catch (error) {
        res.status(500).send({ message: "Error in getEstates" });
    }
}

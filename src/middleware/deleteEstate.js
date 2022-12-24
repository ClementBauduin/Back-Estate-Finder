import path from 'path';
import EstateModel from "../models/EstateModel.js";
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function deleteEstate(req,res) {
    const id  = req.params.id;

    try {
        const estate = await EstateModel.findById(id);
        let imagesNames = estate.images.map((image) => {
            return Object.values(image)[0];
        })
        imagesNames.forEach((imageName) => {
            const filePath = path.join(__dirname,`../uploads/${imageName}`);
            fs.unlink(filePath, (err) => {
                if (err) throw err;
            });
        })

        await EstateModel.findByIdAndDelete(id);
        res.status(200).json({message: "Estate has been deleted"});

    } catch (error) {
        console.error(error);
    }

}


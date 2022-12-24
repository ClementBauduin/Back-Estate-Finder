import { upload } from "../config/multer.config.js";
import multer from 'multer';

export function saveEstateImg(req, res,next) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            console.log("Multer error");
            res.status(500).send({ message: err.message });
        } else if (err) {
            // An unknown error occurred when uploading.
            console.log("Unknown error");
            res.status(500).send({ message: err.message });
        } else {
            // Everything went fine.
            console.log("Everything went fine");
            next();
        }
    });
}
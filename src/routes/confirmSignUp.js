import UserModel from "../models/UserModel.js";

export default function ConfirmSignUp(req, res) {
    const {confirmationCode} = req.params;
    UserModel.findOne({confirmationCode:confirmationCode})
        .then((user) => {
            if (!user) {
                res.status(404).json({message:"User not found"});
            } else {
                user.status = "Active";
                user.save((err) => {
                    if (err) {
                        res.status(500).json({message:err});
                    } else {
                        res.status(200).json({message:"User activated"});
                    }
                })
            }

        })
        .catch((err) => {
            res.status(500).json({message:err});
        })
}
import UserModel from "../models/UserModel.js";

export default async function UserExist(req, res, next) {
  const { usernameEmail } = req.body;
  const user = await UserModel.findOne({
    $or: [{ username: usernameEmail }, { email: usernameEmail }],
  });
  if (!user) {
    res.status(200).send({ message: "Username or email is incorrect" });
  } else {
    return next();
  }
}

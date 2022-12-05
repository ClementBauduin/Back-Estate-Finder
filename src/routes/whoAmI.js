export default async function whoami(req, res) {
    const user = req.user;
    res.status(200).json({ user: user });
}
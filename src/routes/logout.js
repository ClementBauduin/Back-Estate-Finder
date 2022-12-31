export function logout(req, res) {
    res.clearCookie('accessToken', {
        path: "/",
        domain: ".clementbauduin.com"
    });
    return res.status(200).json({ message: "User logged out" });
}

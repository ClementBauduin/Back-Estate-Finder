export function logout(req, res) {
    res.clearCookie('accessToken');
    return res.status(200).json({ message: "User logged out" });
}
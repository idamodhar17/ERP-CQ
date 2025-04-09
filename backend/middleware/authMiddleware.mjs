import jwt from "jsonwebtoken";
import User from "../models/User.mjs";

const protect = async (req, res, next) => {
    let token = req.cookies?.token;

    if (!token) return res.status(401).json({ message: "Not authorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default protect;
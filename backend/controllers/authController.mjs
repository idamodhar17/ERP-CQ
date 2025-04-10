import User from "../models/User.mjs";
import generateToken from "../utils/generateToken.mjs";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password ){
            return res.status(401).json({ message: "Invalid credentials" }); 
        } 

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Login successful",
            user: {
                id: user._id,
                name: user.name,
                role: user.role,
                email: user.email
            },
            token
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

export const resetPassword = async (req, res) => {
    const { userId, newPassword } = req.body;

    try {
        if (!req.user || req.user.role !== "admin") {
            return res.status(403).json({ message: "Only admins can reset passwords" })
        }

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.password = newPassword;
        await user.save();

        res.json({ message: "Password reset successfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to reset password", error: err.message });
    }
};
import Notice from "../models/noticeModel.mjs";
import User from "../models/User.mjs";

export const createNotice = async (req, res) => {
    try {
        const { title, description, category, targetRoles, expiresAt } = req.body;
        const createdBy = req.user._id;

        const newNotice = new Notice({
            title,
            description,
            category,
            targetRoles,
            createdBy,
            expiresAt
        });
        await newNotice.save();
        res.status(201).json({ message: "Notice created", notice: newNotice });
    } catch (err) {
        res.status(400).json({ message: "Failed to create notice", error: err.message });
    }
};

export const getAllNotices = async (req, res) => {
    try {
        const { category, role } = req.query;
        const filter = {};
        if (category) filter.category = category;
        if (role) filter.targetRoles = role;

        const notices = await Notice.find(filter).populate("createdBy", "name role").sort({ date: -1 });

        res.json(notices);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch notices", error: err.message });
    }
};
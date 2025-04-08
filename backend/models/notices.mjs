import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: String,
    category: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
});

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;

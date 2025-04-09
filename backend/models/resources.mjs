import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        file: {
            type: String,
            required: false,
        },
        className: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;

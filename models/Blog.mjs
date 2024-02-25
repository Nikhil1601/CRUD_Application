// Blog.mjs

import mongoose from "mongoose";

const { Schema } = mongoose;

const blogSchema = new Schema({
    title: String,
    body: String,
    image: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Blog = mongoose.model("Blog", blogSchema);

export { Blog }; // Exporting the Blog object

import mongoose from "mongoose";

const WomanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    minibio: {
        type: String,
        required: true
    }
});

export default mongoose.model("Woman", WomanSchema);
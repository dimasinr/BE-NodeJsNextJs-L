import mongoose from 'mongoose';
// const { Schema } = mongoose;

const BeautyBarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    openHour: {
        type: String,
        required: true
    },
    endHour: {
        type: String,
        required: true
    },
    lastSeen: {
        type: String,
        required: true
    },
    img: {
        type: [String],
    },
    gallery: { 
        type: [String],
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    treatments:{
        type: [String],
    }
});

export default mongoose.model("BeautyBar", BeautyBarSchema)
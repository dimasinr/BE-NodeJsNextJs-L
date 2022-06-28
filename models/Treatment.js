import mongoose from 'mongoose';
// const { Schema } = mongoose;

const TreatmentBarSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    gallery:{
        type: [String]
    },
    img:{
        type: [String]
    }
});

export default mongoose.model("Treatment", TreatmentBarSchema)
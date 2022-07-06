import mongoose from 'mongoose';
// const { Schema } = mongoose;

const CitySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }

});

export default mongoose.model("Category", CitySchema)
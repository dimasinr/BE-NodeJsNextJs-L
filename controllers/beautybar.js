import BeautyBar from "../models/BeautyBar.js";


export const createBeautyBar = async (req,res,next)=>{
    
    const newBeautyBar = new BeautyBar(req.body)

    try{
        const savedBeautyBar = await newBeautyBar.save()
        res.status(200).json(savedBeautyBar);
    }catch(err){
        next(err);
    }
}

export const updateBeautyBar = async (req, res, next) =>{
    try{
        const updatedBeautyBar = await BeautyBar.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
            );
        res.status(200).json(updatedBeautyBar);
    }catch(err){
        next(err);
    }
}

export const deleteBeautyBar = async (req, res, next) =>{
    try{
        await BeautyBar.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Store Has Been Deleted");
    }catch(err){
        next(err);
    }
}

export const getIdBeautyBar = async (req, res, next) =>{
    try{
        const beautybar = await BeautyBar.findById(
            req.params.id
            );
        res.status(200).json(beautybar);
    }catch(err){
        res.status(500).json(err);
    }
}

export const getAllBeautyBar = async (req, res, next) =>{
    // const failed = true;
    
    // if (failed) return next(createError(401, "You are not authenticated!"));

    try{
        const beautybars = await BeautyBar.find();
        res.status(200).json(beautybars);
    }catch(err){
        next(err);
    }
}
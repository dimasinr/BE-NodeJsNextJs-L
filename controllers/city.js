import City from "../models/City.js";


export const createCity = async (req,res,next)=>{
    
    const newCity = new City(req.body)

    try{
        const savedCity = await newCity.save()
        res.status(200).json(savedCity);
    }catch(err){
        next(err);
    }
}

export const updateCity = async (req, res, next) =>{
    try{
        const updatedCity = await City.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
            );
        res.status(200).json(updatedCity);
    }catch(err){
        next(err);
    }
}

export const deleteCity = async (req, res, next) =>{
    try{
        await City.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Store Has Been Deleted");
    }catch(err){
        next(err);
    }
}

export const getIdCity = async (req, res, next) =>{
    try{
        const city = await City.findById(
            req.params.id
            );
        res.status(200).json(city);
    }catch(err){
        res.status(500).json(err);
    }
}

export const getAllCity = async (req, res, next) =>{
    // const failed = true;
    
    // if (failed) return next(createError(401, "You are not authenticated!"));

    try{
        const citys = await City.find();
        res.status(200).json(citys);
    }catch(err){
        next(err);
    }
}

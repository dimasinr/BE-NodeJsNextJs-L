import Category from "../models/Category.js";


export const createCategory = async (req,res,next)=>{
    
    const newCategory = new Category(req.body)

    try{
        const savedCategory = await newCategory.save()
        res.status(200).json(savedCategory);
    }catch(err){
        next(err);
    }
}

export const updateCategory = async (req, res, next) =>{
    try{
        const updatedCategory = await Category.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body },
            { new: true }
            );
        res.status(200).json(updatedCategory);
    }catch(err){
        next(err);
    }
}

export const deleteCategory = async (req, res, next) =>{
    try{
        await Category.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("Store Has Been Deleted");
    }catch(err){
        next(err);
    }
}

export const getIdCategory = async (req, res, next) =>{
    try{
        const category = await Category.findById(
            req.params.id
            );
        res.status(200).json(category);
    }catch(err){
        res.status(500).json(err);
    }
}

export const getAllCategory = async (req, res, next) =>{
    // const failed = true;
    
    // if (failed) return next(createError(401, "You are not authenticated!"));

    try{
        const categorys = await Category.find();
        res.status(200).json(categorys);
    }catch(err){
        next(err);
    }
}
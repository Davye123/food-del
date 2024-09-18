import foodModel from "../models/foodModel.js";
import fs from "fs";


//add food

const addFood = async (req, res) => {

    let image_filename = `${req.file.originalname}`;                        

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    });

    try {
        await food.save();
        res.json({success: true, message: "Food added successfully",data: food});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
    
}

//all food list
const listFood = async (req, res) => {
    try{
        const foods = await foodModel.find({});
        res.json({success: true, message: "Foods fetched successfully", data: foods});
    }catch(error){
        console.log(error);
        res.json({success: false, message: error.message});
    } 

}
//remove food
const removeFood = async (req, res) => {
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Food deleted successfully"});
       
    }catch(error){
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {addFood ,listFood,removeFood};

import receipes from "../Models/receipeSchema.js";

//create receipe / post method
export const createReceipe = async (req, res) => {
  try {
    const newReceipe = new receipes(req.body); // to get from data in req.body to assign a model
    await newReceipe.save(); // to save data to your model
    res
      .status(200)
      .json({ message: "Receipe Added Sucessfully", data: newReceipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getAllRecipes

export const getAllReceipes = async (req, res) => {
  try {
    const getReceipe = await receipes.find();
    res
      .status(200)
      .json({ message: "Receipe Retrieved Sucessfullly", data: getReceipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

///getReceipeById

export const getReceipeById = async (req, res) => {
  try {
    const receipeId = req.params.id;
    const receipeDetail = await receipes.findById(receipeId);
    if (!receipeDetail) {
      return res.status(404).json({ message: "Receipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Receipe Retrieved Sucessfullly", data: receipeDetail });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//updateReceipe
export const updateReceipe = async (req, res) => {
  try {
    const receipeId = req.params.id;
    const { name, description, quantity, price } = req.body;
    const result = await receipes.findByIdAndUpdate(
      { _id: receipeId },
      { name, description, quantity, price },
      { new: true }
    );
    if (result.matchedCount == 0) {
      return res.status(404).json({ message: "Receipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "Receipe Updated Sucessfully", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//deleteReceipe

export const deleteReceipe = async (req,res)=>{
  try {
    const receipeId = req.params.id;
    const result = await receipes.findByIdAndDelete({_id:receipeId});
    if(!result){
      return res.status(404).json({ message: "Receipe Not Found" });
    }
    const receipe = await receipes.find()
    res.status(200).json({message:"Receipe Deleted Sucessfully", data:receipe})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
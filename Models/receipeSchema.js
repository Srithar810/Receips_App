import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  }
},
  {
    timestamps:true
  }
);

const receipes = mongoose.model("receipes", recipeSchema);

export default receipes;

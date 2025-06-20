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

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

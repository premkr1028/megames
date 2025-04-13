import mongoose from "mongoose";

const GamePost = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug:{
type: String,
trim: true,
lowercase : true,
required : true
  },
  logo: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VuEvlQaLOCEV11WtBhsPj0PZbTk_LoNJS0DcyaQzqY3meE8wvCOromLn&s=10"
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: [String], // e.g., ['Action', 'Adventure']
    default: []
  },
  platform: {
    type: [String], // e.g., ['Windows', 'Android']
    default: []
  },
  size: {
    type: String,
  },
  version: {
    type: String
  },
  screenshots: {
    type: [String],
    default: []
  },
  downloadLinks: [
    {
      label: String,
      url: String
    }
  ],
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// const GamePost = mongoose.model('GamePost', gameSchema);
export default GamePost
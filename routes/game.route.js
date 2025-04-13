import express from "express"
import GamePost from "../models/game.models.js";
const GameRoute = express.Router();

// Add a new game
GameRoute.post('/add', async (req, res) => {
  try {
    const game = new GamePost(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all games
GameRoute.get('/', async (req, res) => {
  try {
    const games = await GamePost.find().sort({ createdAt: -1 });
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single game by slug
GameRoute.get('/:slug', async (req, res) => {
  try {
    const game = await GamePost.findOne({ slug: req.params.slug });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a game by ID
GameRoute.delete('/:id', async (req, res) => {
  try {
    const result = await GamePost.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json({ message: 'Game deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a game by ID
GameRoute.put('/:id', async (req, res) => {
  try {
    const updatedGame = await GamePost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!updatedGame) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(updatedGame);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
export default GameRoute
import Highlight from '../mongodb/models/highlights.js'; // Import the Highlight model

// Fetch all highlights
export const getAllHighlights = async (req, res) => {
  try {
    const highlights = await Highlight.find()
      .populate('category', 'category') // Populate the category field

    res.status(200).json(highlights);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch highlights' });
  }
};

// Fetch a single highlight by ID
export const getHighlightById = async (req, res) => {
  try {
    const { id } = req.params;

    const highlight = await Highlight.findById(id)
      .populate('category', 'category'); // Populate the category field

    if (!highlight) {
      return res.status(404).json({ message: 'Highlight not found' });
    }

    res.status(200).json(highlight);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch highlight' });
  }
};
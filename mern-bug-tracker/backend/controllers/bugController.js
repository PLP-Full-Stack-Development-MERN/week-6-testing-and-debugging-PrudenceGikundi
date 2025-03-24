const Bug = require("../models/Bug");

exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.createBug = async (req, res) => {
  try {
    const { title, description } = req.body;
    const bug = new Bug({ title, description });
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    res.status(500).json({ message: "Error creating bug" });
  }
};

exports.updateBug = async (req, res) => {
  try {
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.status(200).json(bug);
  } catch (error) {
    res.status(500).json({ message: "Error updating bug" });
  }
};

exports.deleteBug = async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bug deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting bug" });
  }
};

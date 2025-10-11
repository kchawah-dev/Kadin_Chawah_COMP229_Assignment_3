const User = require("../models/user");

exports.getUsers = async (req, res) => res.json(await User.find());
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  user ? res.json(user) : res.status(404).json({ message: "User not found" });
};
exports.addUser = async (req, res) => res.status(201).json(await new User(req.body).save());
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  updated ? res.json(updated) : res.status(404).json({ message: "User not found" });
};
exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  deleted ? res.json({ message: "User deleted" }) : res.status(404).json({ message: "User not found" });
};
exports.deleteAllUsers = async (req, res) => {
  await User.deleteMany();
  res.json({ message: "All users removed" });
};
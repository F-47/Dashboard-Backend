let mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  Members: [
    {
      memberName: String,
      memberImage: String,
    },
  ],
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

let Project = mongoose.model("project", projectSchema);

module.exports = Project;

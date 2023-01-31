let mongoose = require("mongoose");

let projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  Members: [
    {
      name: String,
      image: String,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

let Project = mongoose.model("project", projectSchema);

module.exports = Project;

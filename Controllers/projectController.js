let Project = require("../Model/Project");

exports.getAllProjects = async (req, res) => {
  Project.find()
    .then((response) => res.json(response))
    .catch((err) => console.log(err));
};

exports.getProjectById = (req, res, next) => {
    Project.findById(req.params.id)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.log(err));
  };

exports.createProject = async (req, res, next) => {
    let project = new Project(req.body);
    let result = await Project.findOne({ projectName: project.projectName });
    console.log(result)
    if (result) {
      return res.status(403).send({ message: "Project Name Already Exists" });
    }
    else {
    project
        .save()
        .then((result) => {
          res.json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  exports.projectDelete = (req, res) => {
    let id = req.params.id;
    console.log(id);
    Project.findByIdAndDelete(id)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
let express = require('express');
let mongoose = require('mongoose')
let bodyParser = require('body-parser');
const projectController = require("./Controllers/projectController");
let app = express();
let port = process.env.PORT || 3333;

app.use(bodyParser.json());
require('dotenv').config();

mongoose.set('strictQuery', true)
//create mongodb
let dbURI = process.env.MONGO_DB_URL
mongoose.connect(dbURI)
    .then(() => console.log("Database connected!"))
    .catch((err)=>console.log(err))

//middleware and static files
app.use(express.static('public')) // we can access any file in the public folder
app.use(express.urlencoded({extended:true})) // so we can access the data coming from the input value

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/getAllprojects", projectController.getAllProjects);
app.get("/project/:id", projectController.getProjectById);
app.post("/createProject", projectController.createProject);

app.listen(port, () => {
    console.log(`conected with port ${port}`);
  });
// some imports and initializations
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const edge = require('edge-js');
const Joi = require('joi');

const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

// add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('dev'));

// initiate server
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use(express.static('../View'))

//Get Method for '/' url
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

// get dll and functions
// original dll path: '../temporary_files/simple_csharp_dll/ClassLibrary1/ClassLibrary1/bin/Debug/ClassLibrary1.dll'
let dll_name = require('path').join(__dirname, '../Model/model.dll');
var detect_from_CSVs = edge.func({
    assemblyFile: dll_name,
    typeName: 'ClassLibrary1.Startup', // change those names according to the relevant names 
    methodName: 'LearnCSV' // This must be Func<object,Task<object>>
});

// send via post 2 csv files + model type (as query) and and get anomaly results
app.post('/detect', async (req, res) => {
    // get model type from query line
    const schema_query = Joi.object({
        model_type: Joi.string().valid('regression', 'hybrid').required()
    });

    // validate query
    const result_query = schema_query.validate(req.body);

    // throw an error if wrong
    if (result_query.error) {
        res.status(400).send(result_query.error.details[0].message);
        return;
    }

    // check files validity
    if (!req.files)
        return res.status(400).send("No file uploaded");
    if (!req.files.learn_csv)
        return res.status(400).send("`learn_csv` was not uploaded");
    if (!req.files.anomaly_csv)
        return res.status(400).send("`anomaly_csv` was not uploaded");

    // Use the name of the input field to retrieve the uploaded file
    let learn_csv = req.files.learn_csv;
    let anomaly_csv = req.files.anomaly_csv;
    if (!learn_csv.name.endsWith(".csv") || !anomaly_csv.name.endsWith(".csv"))
        return res.status(400).send("both files must be of csv type")

    // Use the mv() method to place the file in upload directory (i.e. "uploads")
    learn_csv.mv('./uploads/' + learn_csv.name);
    anomaly_csv.mv('./uploads/' + anomaly_csv.name);

    // create data to pass to the model
    const uploaded_learn_name = `${process.cwd()}/uploads/${learn_csv.name}`
    const uploaded_anomaly_name = `${process.cwd()}/uploads/${anomaly_csv.name}`
    let data = {
        "csv_learn": uploaded_learn_name,
        "csv_anomaly": uploaded_anomaly_name,
        "model_type": req.query.model_type,
        "passed_data_type": "csv"
    }

    // run c# code and return accordingly
    detect_from_CSVs(data, function (error, result) {
        if (error) return res.status(400).send(`error passed from model: ${error.message}`)
        B = {}
        result.forEach(e => {
            B[e.description] = new Span(e.firstTimeStep, e.lastTimeStep)
        });
        res.send(JSON.stringify(B))
    })
});

// span class which defines time span
class Span {
    constructor(start_time, end_time) {
        this.start_time = start_time;
        this.end_time = end_time;
    }
}

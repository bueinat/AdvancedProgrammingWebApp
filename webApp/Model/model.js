// some imports and initializations
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const edge = require('edge-js');
const Joi = require('joi');

// get dll and functions
// original dll path: '../temporary_files/simple_csharp_dll/ClassLibrary1/ClassLibrary1/bin/Debug/ClassLibrary1.dll'
let dll_name = require('path').join(__dirname, 'model.dll');
var detect_from_CSVs = edge.func({
    assemblyFile: dll_name,
    typeName: 'ClassLibrary1.Startup', // change those names according to the relevant names 
    methodName: 'LearnCSV' // This must be Func<object,Task<object>>
});

function handle(error, result) {
        if (error) throw error; // return res.status(400).send(`error passed from model: ${error.message}`)
        B = {}
        result.forEach(e => {
            B[e.description] = new Span(e.firstTimeStep, e.lastTimeStep)
        });
        res.send(JSON.stringify(B))
    }

// run c# code and return accordingly
function detect(data) {
    detect_from_CSVs(data, function (error, result) {
        if (error) throw error
        let B = {}
        result.forEach(e => {
            B[e.description] = new Span(e.firstTimeStep, e.lastTimeStep)
        })
        console.log(B)
        // this is not returned
        return JSON.stringify(B);
    })
}

// declare the following function to be used in the controller
module.exports.detect = detect
module.exports.handle = handle

// span class which defines time span
class Span {
    constructor(start_time, end_time) {
        this.start_time = start_time;
        this.end_time = end_time;
    }
}

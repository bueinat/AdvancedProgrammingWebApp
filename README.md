# AdvancedProgrammingWebApp

web app project for advanced programming project in BIU


## Special features
We used design pattern called mvc, that mean that all the project separate to 3 different parts:<br />
**The view**  that responsible to the user interface (get the information from the user, and show him the final result).<br />
**The model** that call to outern libraries like the anomaly detect algorithm to use calculate on the information, and return the result.<br />
**The controller** that operate the model and the controller, and linking between them.<br />
Another feature is the communication between the user and the program. The program functioning as a server that waiting to requests from the client, that this is the user, who send the information and get the request in http protocol.

## Directories in the Project<br />
**Design Details** – consist a file that represent the UML scheme.<br />
**anomalyDetectionAlgo** – consist mostly the c# files that using to anomaly detection.<br />
**webApp** – consist the project's primary files. Inside there is directories to the View, to the Model and to the controller, that each of them consist the corresponded parts from the MVC design pattern. The Controller directory consist also the csv files that uploaded to the algorithm.


## Installations
The only required platform for running the server is `node`. You can download it in their website: https://nodejs.org/   
Afterwards you clone this repository into your computer using the following command:   
`git clone https://github.com/bueinat/AdvancedProgrammingWebApp.git`   
Of course, you can clone it in any other way you like.   
The server code is the `webApp/Controller` folder, `controller.js`. In order to run the server, go to this folder and install the following `node` packages:
- express
- express-fileupload
-	morgan
- cors
- lodash
- edge-js
-	joi   

Install each package using the command: `npm -i install <package name>`

## Run the Server
Run the server using the command: `node controller.js` when you are in the mentioned directory. The terminal should indicate it is listening to port 8080.

## Send Requests
There are 2 optional ways of sending request.

### using tools such as postman for sending requeqst directly to the server
The request is `detect` and has to be sent this way:
- one query parameter `model_type` should be sent. It has to be either `regression` or `hybrid`, and no other model types would be accepted. Other query parameters will be ignored.
- 2 csv files, one's field `learn_csv` and the other's `anomaly_csv`. There is no limit on the files' names, except it should end with `.csv`. The files should include *unique* columns names. Plus, the case where the files do not have the same columns had not been tested and may not work.

Here is an example of successful request:
![image](https://user-images.githubusercontent.com/62245924/120105789-257ffd00-c163-11eb-9326-6716b5c9b097.png)


### sending request via web app
open `http://localhost:8080/` in your browser (if the server is running on your computer). You will see a form you can fill **put here an image of the form**. press Upload and after the algorithm finishes running (it can take a couple of seconds for the regression model and a couple of hours for the hybrid model), you will see a ?? with the algorithm's results. **add an image also here**.

## Further Documentation
Some extra details about documentation of the code and its construction (such as UML Diagram) can be found [here](https://github.com/bueinat/AdvancedProgrammingWebApp/tree/main/Design%20Details) in this project.

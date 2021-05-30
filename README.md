# AdvancedProgrammingWebApp

web app project for advanced programming project in BIU


## Special features
We used a design pattern called MVC, that means that all the project  separates to 3 different parts:<br />
- **The view**  that is responsible to the user interface (gets the information from the user, and shows him the final result).<br />
- **The model** that calls to outern libraries like the anomaly detect algorithm to use calculate on the information, and return the result.<br />
- **The controller** that operates the model and the controller, and links between them.<br />
Another feature is the communication between the user and the program. The program functions as a server that waits to requests from the client, that this is the user, who sends the information and gets the request in http protocol.

## Directories in the Project<br />
**Design Details** – consists a file that represents the UML scheme.<br />
**anomalyDetectionAlgo** – consists mostly the c# files that are used to anomaly detection.<br />
**webApp** – consists the project's primary files. Inside there are directories for the View, to the Model and to the controller, that each of them consists the corresponded parts from the MVC design pattern. The Controller directory consists also the csv files that uploaded to the algorithm.


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
There are 2 optional ways of sending request:

### using tools such as postman for sending requeqst directly to the server
The request is `detect` and has to be sent this way:
- one query parameter `model_type` should be sent. It has to be either `regression` or `hybrid`, and no other model types would be accepted. Other query parameters will be ignored.
- 2 csv files, one's field `learn_csv` and the other's `anomaly_csv`. There is no limit on the files' names, except it should end with `.csv`. The files should include *unique* columns names. Plus, the case where the files do not have the same columns had not been tested and may not work.

Here is an example of successful request:
![photo_2021-05-30_20-13-09](https://user-images.githubusercontent.com/51541904/120113514-81f31480-c183-11eb-9540-91a4a622f927.jpg)



### sending request via web app
open `http://localhost:8080/` in your browser (if the server is running on your computer). You will see a form you can fill . press Upload and after the algorithm finishes running (it can take a couple of seconds for the regression model and a couple of hours for the hybrid model), you will see a a pretty table with the algorithm's results:
![photo_2021-05-30_20-13-09](https://user-images.githubusercontent.com/51541904/120113643-12315980-c184-11eb-9509-809c725b21f2.jpg)



The table concludes two columns, one for start, one for end. This represents the anomaly and its time. 
Under the table, there appears a GENERIC chart- graph representing one attribute on X-axes and the other attribute on the Y-axes. The points on the graph represent the times of the anomalies. At this file, the graph contains "fake" data but accessing the csv file and getting the data from there is a simple process that makes the grpah appear nicely. 

## Further Documentation
Some extra details about documentation of the code and its construction (such as UML Diagram) can be found [here](https://github.com/bueinat/AdvancedProgrammingWebApp/tree/main/Design%20Details) in this project.

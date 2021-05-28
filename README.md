# AdvancedProgrammingWebApp

web app project for advanced programming project in BIU


פיצ'רים מיוחדים- ארכיטקטורת MVC, תקשורת בעזרת בקשות http ושרת שמאזין להם ובסוף שולח תשובה. המידע נשלח כקובץ JSON.

תיקיות בפרויקט:
REST_API  
בתוכה יש:
* את view תיקייה שבה יש את הקבצים vm.js, וindex.html שאחראים על התצוגה של הממשק משתמש
upload*- תיקייה שבה יש קבצי csv שניתן ללמוד אותם ולבדוק בהם חריגות
*api.js – קובץ שמכיל גם את המודל וגם את הקונטרולר (עינת צריכה לפצל אותו ל2 נפרדים)
*result.html, result.js- נעה אמרה לי שהם מיותרים ואפשר למחוק אותם

temporary_filed
בתוכה יש את הקבצים שמשמשים לזיהוי החריגות (כנראה שנשנה עוד את השם שלה וקצת את התוכן שלה)

התקנות:
ניתן להשתמש בתוכנה node.js ולפני זה להתקין בו את ההתקנות הבאות:

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
- 2 csv files, one's field `learn_csv` and the other's `anomaly_csv`. There is no limit on the files' names, except it should end with `.csv`.

Here is an example of request: **put image here**.   

### sending request via web app
open `http://localhost:8080/` in your browser (if the server is running on your computer). You will see a form you can fill **put here an image of the form**. press Upload and after the algorithm finishes running (it can take a couple of seconds for the regression model and a couple of hours for the hybrid model), you will see a ?? with the algorithm's results. **add an image also here**.

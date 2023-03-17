import express from "express";
import bodyParser from "body-parser";
import viewEnigne from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";

require('dotenv').config();

let app = express();


//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEnigne(app);
initWebRoutes(app);

connectDB();


let port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log("BackEnd node js runing on the port :" + port)
);
import express from "express";
const app = express();
import routes from "./src/router.js";
import connectionDB from "./src/connectDB.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();
connectionDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(process.env.PORT, function () {
  console.log(`Your app is running at port ${process.env.PORT}`);
});

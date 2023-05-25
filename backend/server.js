const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();
const bodyParser = require("body-parser");

const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const translationRoutes = require("./routes/translationRoutes");

//middelwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Use translation routes
app.use("/translations", translationRoutes);

//custtom not found & error handler
app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 8080;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
    connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log("running error :", error.message);
  }
};

start();

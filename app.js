const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("express-async-errors");

const { initDatabaseRelations } = require("./database/db.relations");
const { errorHandler } = require("./middleware/error.middleware");
const { httpResponse } = require("./utils/http-responses");

const invoiceRouter = require("./routes/invoice.routes");
const studentRouter = require("./routes/student.routes");

const app = express();
initDatabaseRelations();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/invoice", invoiceRouter);
app.use("/student", studentRouter);

app.use(function (_req, res) {
  return httpResponse.notFound(res);
});

app.use(errorHandler);

module.exports = app;

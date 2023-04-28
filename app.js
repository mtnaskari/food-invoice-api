const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { initDatabaseRelations } = require("./database/db.relations");

const invoiceRouter = require("./routes/invoice.routes");

const app = express();
initDatabaseRelations();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/invoice", invoiceRouter);

module.exports = app;

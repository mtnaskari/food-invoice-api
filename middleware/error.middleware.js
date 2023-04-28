const { httpResponse } = require("../utils/http-responses");
const { ValidationErrorItem } = require("sequelize");

/**
 * Error handler middleware
 */
const errorHandler = (err, req, res, next) => {
  if (
    err.errors instanceof Array &&
    err.errors[0] instanceof ValidationErrorItem
  ) {
    const errors = err.errors.map((el) => el.message);

    httpResponse.badRequest(res, errors[0]);
  }

  httpResponse.internalServerError(res);

  next(err);
};

module.exports = {
  errorHandler,
};

const { StatusCodes, ReasonPhrases } = require("http-status-codes");

class HttpResponse {
  ok(res, data) {
    return res.status(StatusCodes.OK).send({
      success: true,
      data: data,
    });
  }

  created(res, data) {
    return res.status(StatusCodes.CREATED).send({
      success: true,
      data: data,
    });
  }

  badRequest(res, message = ReasonPhrases.BAD_REQUEST) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      success: false,
      message: message,
    });
  }

  notFound(res, message = ReasonPhrases.NOT_FOUND) {
    return res.status(StatusCodes.NOT_FOUND).send({
      success: false,
      message: message,
    });
  }

  internalServerError(res, message = ReasonPhrases.INTERNAL_SERVER_ERROR) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      success: false,
      message: message,
    });
  }
}

const httpResponse = new HttpResponse();

module.exports = { httpResponse };

"use strict";

var morgan = require("morgan");

var logger = require("../utils/logger");

var stream = {
  write: function write(message) {
    return logger.http(message);
  }
};

var skip = function skip() {
  var env = process.env.NODE_ENV || "development";
  return env !== "development";
};

var morganMiddleware = morgan(":remote-addr :method :url :status :res[contentlength] - :response-time ms", {
  stream: stream,
  skip: skip
});
module.exports = morganMiddleware;
//# sourceMappingURL=morgan.middleware.dev.js.map

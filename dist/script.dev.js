"use strict";

var express = require("express");

var morganMiddleware = require("./middlewares/morgan.middleware");

var logger = require("./utils/logger");

var app = express();
app.use(express.json()); // Позволяет парсить JSON в теле запроса

app.use(morganMiddleware);
app.get("/api/status", function (req, res) {
  logger.info("Проверка статуса API: Все в порядке");
  res.status(200).send({
    status: "Запущен",
    message: "API запущен и работает!"
  });
}); // Новый маршрут для логирования событий

app.post("/api/log", function (req, res) {
  var event = req.body.event;
  logger.info("\u0421\u043E\u0431\u044B\u0442\u0438\u0435: ".concat(event));
  res.status(200).send({
    message: "Событие залогировано"
  });
}); // Запуск сервера

var PORT = process.env.PORT || 3002;
app.listen(PORT, function () {
  logger.info("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 ".concat(PORT));
});
//# sourceMappingURL=script.dev.js.map

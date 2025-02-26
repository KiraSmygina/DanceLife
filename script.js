const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");
const logger = require("./utils/logger");
const app = express();
app.use(express.json()); // Позволяет парсить JSON в теле запроса
app.use(morganMiddleware);

app.get("/api/status", (req, res) => {
    logger.info("Проверка статуса API: Все в порядке");
    res.status(200).send({
        status: "Запущен",
        message: "API запущен и работает!"
    });
});

// Новый маршрут для логирования событий
app.post("/api/log", (req, res) => {
    const { event } = req.body;
    logger.info(`Событие: ${event}`);
    res.status(200).send({ message: "Событие залогировано" });
});

// Запуск сервера
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    logger.info(`Сервер запущен на порту ${PORT}`);
});
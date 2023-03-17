import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/ngchuongdev', (req, res) => {
        return res.send('Chuong nek')
    })
    return app.use("/", router);
}

module.exports = initWebRoutes;
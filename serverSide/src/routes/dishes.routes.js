const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishesController = require("../controllers/DishesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const dishesController = new DishesController();

dishesRoutes.use(ensureAuthenticated);

dishesRoutes.get("/", dishesController.index);
dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.patch("/image", upload.single("image"), (request, response) => {
  console.log(request.file.filename);
  response.json();
});

module.exports = dishesRoutes;

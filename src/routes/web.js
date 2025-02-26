const express = require("express");
const {
  getHomePage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlRemoveUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/create", getCreatePage);
router.post("/create_user", postCreateUser);
router.get("/update/:userId", getUpdatePage);
router.post("/update_user", postUpdateUser);
router.post("/delete_user/:userId", postDeleteUser);
router.post("/delete_user", postHandlRemoveUser);
module.exports = router;

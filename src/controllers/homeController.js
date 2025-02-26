const conection = require("../config/database");
const { post, use } = require("../routes/web");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDservices");

const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const postCreateUser = (req, res) => {
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  conection.query(
    `INSERT INTO Users(email, name, city) VALUES(?,?,?)`,
    [email, name, city],
    function (err, results) {
      console.log(results);
      res.redirect("/");
    }
  );
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};
const postUpdateUser = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.myName;
  let city = req.body.city;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.userId;
  let user = await getUserById(userId);
  res.render("delete.ejs", { userEdit: user });
};
const postHandlRemoveUser = async (req, res) => {
  const userId = req.body.userId;
  await deleteUserById(userId);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getCreatePage,
  postCreateUser,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlRemoveUser,
};

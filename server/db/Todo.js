const Sequelize = require("sequelize");
const db = require("./database");

const Todo = db.define("todo", {
  taskName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  assignee: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Todo;

/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * Archivo encargado de definir el modelo para trabajar con documentos obtenidos desde la base de datos
 */
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const { Schema } = mongoose;

const User = new Schema({
  displayName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  type: { type: String },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true },
  profileImage: { type: String },
});

User.methods.toUpper = async function () {
  this.password = this.password.toUpperCase();
  this.name = this.name.toUpperCase();
};

User.methods.encryptPassword = async (password_normal) => {
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password_normal, salt);
  return hash;
};

User.methods.correctPassword = async function (password_user) {
  let compare = await bcryptjs.compare(password_user, this.password);
  return compare;
};

module.exports = mongoose.model("user", User);

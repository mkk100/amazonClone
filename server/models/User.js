const mongoose = require('mongoose');
const {schema} = mongoose;

const UserSchema = new Schema({
    email: {type: String, unique: true},
    password: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;
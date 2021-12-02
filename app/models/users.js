//Good?
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const customerSchema = new Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    status: {type: Boolean, default: true},
    email: {type: String, required: true},
    password: {type: String, required: true, },//needs unique definition 
    dateCreated: {type: Date, default: Date.now},
});

module.exports = Mongoose.model('UserModel', userSchema);

// const Bcrypt = require('bcryptjs')
// password: { type: String, required: true }

// UserSchema.pre('save', function (next) {
//     var person = this;
//     if (this.isModified('password') || this.isNew) {
//         Bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             Bcrypt.hash(person.password, salt, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 person.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     Bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };
// module.exports = Mongoose.model('Users', usersSchema);
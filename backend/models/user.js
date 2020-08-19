const { Schema, model } = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 15,
        validate(value) {
            if (!/^[A-Za-z0-9]+$/.test(value)) throw new Error();
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error();
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        maxlength: 30,
        validate(value) {
            if (!/^[A-Za-z0-9!@#$_-]+$/.test(value)) throw new Error();
        }
    },
    garden: {
        type: Array,
        default: []
    }
});

userSchema.pre('save', async function (next) {
    const user = this;

    try {
        if (user.isModified('password')) user.password = await bcrypt.hash(user.password, 10);
        else throw new Error();
    }
    catch {
        throw new Error();
    }

    next();
});

const User = model('user', userSchema);

module.exports = User;
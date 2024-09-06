const User = require('../models/user.model');

class UserRepository {
    async create(user) {
        return await User.create(user);
    }

    async findByEmail(email) {
        return await User.findOne({ where: { email } });
    }

    async findAll() {
        return await User.findAll();
    }
}

module.exports = UserRepository;

const UserRepository = require('../repositories/user.repository');
const userRepository = new UserRepository();

class UserService {
    async register(user) {
        const existingUser = await userRepository.findByEmail(user.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        return await userRepository.create(user);
    }

    async getUsers() {
        return await userRepository.findAll();
    }
}

module.exports = UserService;

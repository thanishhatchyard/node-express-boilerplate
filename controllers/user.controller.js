const UserService = require('../services/user.service');
const userService = new UserService();

class UserController {
    async createUser(req, res) {
        try {
            const user = await userService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUsers(req, res) {
        console.log("triggered")
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = UserController;

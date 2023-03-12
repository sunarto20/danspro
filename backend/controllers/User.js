import User from "../models/User.js"
import jwt from "jsonwebtoken"
import Config from "../config/Constants.js"
const UserController = {

    getUserByUsername: async (req, res) => {
        const { username, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    username: username,
                    password: password
                }, attributes: ['name', 'username']
            })

            if (user === null) {
                throw ({ message: 'User Not Found', status: 404 })
            }
            const token = jwt.sign({ name: user.name, username: user.username }, Config.jwtKey);
            res.json({ user, token })
        } catch (error) {
            res.status(error.status).json(error)
        }
    }
}

export default UserController
import jwt from "jsonwebtoken"
import Config from "../config/Constants.js"

const verifyToken = (req, res, next) => {

    // if (!req.headers.authorization) {
    //     res.status(401).json('Access Denied')
    // }

    // const verify = jwt.verify(req.headers.authorization.split(' ')[1], Config.jwtKey)

    // if (!jwt.verify(req.headers.authorization.split(' ')[1], Config.jwtKey)) {
    //     res.status(403).json('Forbidden Access')
    // }

    next()
}

export default verifyToken
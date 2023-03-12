import dotenv from "dotenv";

dotenv.config()

const Config = {
    baseApiUrl: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
    baseApiUrlDetail: "http://dev3.dansmultipro.co.id/api/recruitment/positions",
    jwtKey: process.env.JWT_SECRET
}

export default Config;
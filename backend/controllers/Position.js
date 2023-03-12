import Config from "../config/Constants.js"
import { URLSearchParams } from "url";

const PositionController = {
    getPosition: async (req, res) => {
        const url = Config.baseApiUrl
        // console.log(req.query);
        const param = Object.assign({ page: 1 }, req.query)
        try {
            const positions = await fetch(url + '?' + new URLSearchParams(param))
                .then((response) => response.json())
                .then((data) => data);

            // filter data if null 
            const data = positions.filter(position => { return position != null })

            res.json(data)

        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    },

    getPositionById: async (req, res) => {
        const url = `${Config.baseApiUrlDetail}/${req.params.id}`
        try {
            const data = await fetch(url)
                .then((response) => response.json())
                .then((data) => data);

            res.json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default PositionController
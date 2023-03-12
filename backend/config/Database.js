import { Sequelize } from "sequelize";

const db = new Sequelize('danspro', 'sunarto', 'sunarto123', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

export default db;
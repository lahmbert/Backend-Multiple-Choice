import { Sequelize } from 'sequelize'

const db = new Sequelize('multiple', 'polleck', 'Likaliqu86', {
    host: "db4free.net",
    dialect: "mysql"
})

export default db
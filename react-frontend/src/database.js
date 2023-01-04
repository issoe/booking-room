const { createPool } = require('mysql')

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'rootuser',
    connectionLimit: 10
})

pool.query('select * from booking_app._admin', (err, res) => {
    return console.log(res)
})
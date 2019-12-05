const pg = require('pg')

const client = new pg.Client({
    user:'tiaguinho',
    host: '69.171.4.30',
    database: 'talentos3',
    password:'talentos2019',
    port: 5432
});

module.exports = client
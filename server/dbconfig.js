var dbconfig = {
    development: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'TermProject'
    },
    production: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'dbuser66',
        password: 'P@ssw0rd',
        database: 'user66050_db'
    }
};
module.exports = dbconfig;
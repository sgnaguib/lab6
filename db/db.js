const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-3-213-192-58.compute-1.amazonaws.com',  
    user: 'qefpwiuicticzb',  
    database: 'dfesdncqjsd6p3',  
    password: '3a4fcab43d6c9f95cacb6910edac6ea42927a34c91a23240bc961ecb8531c5b2',
    port: 5432,
    ssl: false
});  

module.exports = pool;
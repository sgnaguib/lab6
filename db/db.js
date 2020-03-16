const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-3-213-192-58.compute-1.amazonaws.com',  
    user: 'grgwazdmdtyjhr',  
    database: 'd92kd5b7m1130l',  
    password: 'ccb960d17438b49e6eb7f5393f07d9d566175a433c8bcd47a43e26bbb270b097',
    port: 5432,
    ssl: false
});  

module.exports = pool;
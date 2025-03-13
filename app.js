const sqlite3 = require('sqlite3').verbose();
let sql;

let fighterName = process.argv[2];
const db = new sqlite3.Database("data.db", sqlite3.OPEN_READ, (err) => {
    if (err)
        return console.error(err.messsage)
;})

sql = 'SELECT * FROM fighter WHERE name= ?';
db.get(sql, [fighterName], (err, row)=> {
    if (err){
        return console.error(err.messsage);
    }
    if (row){
        console.log(row.name);
        console.log(row.wins);
        console.log(row.losses);
    }
});
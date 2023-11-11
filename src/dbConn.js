const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1',
    user            : 'bookii',
    password        : 'iikooB258#',
    database        : 'bookii'
  });

  module.exports = pool;


// export async function queryToDb(qeury, queryValues){
//     pool.getConnection(function(err, connection) {
//         if (err) throw err; // not connected!
      
//         // Use the connection. Use connection.execute() instead to make prepared statements with the same syntax 
//         connection.execute(query, queryValues, function (error, results, fields) {
//           // When done with the connection, release it.
//           connection.release();
      
//           // Handle error after the release.
//           if (error) throw error;
      
//           // Don't use the connection here, it has been returned to the pool.
//         });
//     });
// }




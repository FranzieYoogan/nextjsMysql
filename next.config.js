/** @type {import('next').NextConfig} */
const nextConfig = {

    
}

const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "gamesblog"
});
console.log('Connected to MySQL database!');

module.exports = conexao;
module.exports = nextConfig

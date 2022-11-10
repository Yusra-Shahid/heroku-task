const Pool= require("pg").Pool

const pool = new Pool({

    user : "vhzfhtxbibwmxj",
    host: "ec2-54-167-186-198.compute-1.amazonaws.com",
    database: "dbo0geho14b7dp",
    password:"5344bc5ad4f42b1760521d1474ce6fb700491c6755620996c1bd03ea5d8eae5a",
    port: "5432",
    ssl:{
        rejectUnauthorized: false
    }
})
module.exports = pool;
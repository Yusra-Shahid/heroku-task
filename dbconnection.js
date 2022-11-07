const Pool= require("pg").Pool

const pool = new Pool({

    user : "fsprirtbbdrkhh",
    host: "ec2-18-215-41-121.compute-1.amazonaws.com",
    database: "d5he8sbe1rrk7c",
    password:"becad58a02a3426d95cb378e25269149e15264b085037a788ee17101940b6a55",
    port: "5432",
    ssl:{
        rejectUnauthorized: false
    }
})
module.export = pool;
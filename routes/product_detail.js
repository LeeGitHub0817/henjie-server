const express = require("express");
const pool = require("../pool/pool");

var detailRouter = express.Router();

detailRouter.get("/detail", (req, res)=>{
    var sql = "SELECT * FROM mf_product WHERE pid=?";
    var pid = req.query.pid;
    pool.query(sql, [pid], (err, result)=>{
        res.json(result);
    });
});

module.exports = detailRouter;
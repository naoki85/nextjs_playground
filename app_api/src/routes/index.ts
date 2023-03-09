import { AppDataSource } from "../data-source";
var express = require('express');
var router = express.Router();
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err);
    });

/* GET home page. */
router.get('/', function(req: any, res: any, next: any) {  // 変更箇所
  res.render('index', { title: 'Express' });
});

module.exports = router;
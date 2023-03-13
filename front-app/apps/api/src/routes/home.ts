import * as express from "express";

const router = express.Router();

router.get('/', function(req: any, res: any, next: any) {  // 変更箇所
  res.send('success');
});

export default router;

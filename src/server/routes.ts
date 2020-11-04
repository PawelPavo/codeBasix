import * as express from 'express';

const router = express.Router();

router.get('/api/sup', (req, res, next) => {
    res.json('We are up and running');
});

export default router;
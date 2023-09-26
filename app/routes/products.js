const express = require('express');

const controller = require('../controllers/products')

const router = express.Router();
const path = 'products';

router.get(
    `/${path}`,
    controller.getData
);

router.post(
    `/${path}`,
    controller.insertData
);

router.put(
    `/${path}/:id`,
    controller.updateSingle
);

router.delete(
    `/${path}/:id`,
    controller.deleteSingle
);


module.exports = router;
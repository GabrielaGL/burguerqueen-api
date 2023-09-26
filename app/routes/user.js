const express = require('express');

const controller = require('../controllers/user')

const router = express.Router();
const path = 'users';

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
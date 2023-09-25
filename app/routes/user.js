const express = require('express');

const controller = require('../controllers/user')

const router = express.Router();
const path = 'user';

router.get(
    `/${path}`,
    controller.getData
)

router.post(
    `/${path}`,
    controller.insertData
)

router.put(
    `/${path}/:id`,
    controller.updateSingle
)


module.exports = router;
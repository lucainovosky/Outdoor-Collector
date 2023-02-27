const express = require('express')
const router = express.Router()
const outdoorControllers = require('../controllers/outdoorControllers')

router
  .route('/')
  .get(outdoorControllers.getAllOutdoor)
  .post(outdoorControllers.createOne)

router
  .route('/:id')
  .get(outdoorControllers.getOne)
  .delete(outdoorControllers.deleteOne)
  .patch(outdoorControllers.updataOne)

module.exports = router

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
  .patch(outdoorControllers.updateOne)

router
  .route('/filter-season/:season')
  .get(outdoorControllers.getSeason)

router
  .route('/filter-location/:location')
  .get(outdoorControllers.getLocation)

router
  .route('/filter-bike/bike')
  .get(outdoorControllers.getBike)

module.exports = router

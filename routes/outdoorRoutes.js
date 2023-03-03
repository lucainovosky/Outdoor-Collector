const express = require('express')
const router = express.Router()
const outdoorControllers = require('../controllers/outdoorControllers')

router
  .route('/')
  .get(outdoorControllers.getAllOutdoor)
  .post(outdoorControllers.createOne)

router
  .route('/filter/:id')
  .get(outdoorControllers.getOne)
  .delete(outdoorControllers.deleteOne)
  .patch(outdoorControllers.updateOne)

router
  .route('/filter-season')
  .get(outdoorControllers.getSeason)

router
  .route('/filter-location')
  .get(outdoorControllers.getLocation)

router
  .route('/filter-bike')
  .get(outdoorControllers.getBike)

router
  .route('/filter-altitude')
  .get(outdoorControllers.getAltitude)

router
  .route('/filter-level')
  .get(outdoorControllers.getLevel)

router
  .route('/filter-duration')
  .get(outdoorControllers.getDuration)

module.exports = router

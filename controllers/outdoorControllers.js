const Outdoor = require('../models/outdoorModel')
const catchAsync = require('../utils/catchAsync')

exports.getAllOutdoor = catchAsync( async(req, res)=> {

  const tours = await Outdoor.find({});

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
        data: tours
    }
  })

})

exports.getOne = catchAsync( async(req, res, next)=> {

  const doc = await Outdoor.findById(req.params.id)

  res.status(200).json({
    status: 'success',
    result: doc.length,
    data: {
        data: doc
    }
  })

})

exports.createOne = catchAsync( async(req, res, next) => {

  const doc = await Outdoor.create(req.body)

  res.status(201).json({
      status: 'success',
      data: {
          data: doc
      }
  })

})

exports.deleteOne = catchAsync( async(req, res, next) => {

  const doc = await Outdoor.findByIdAndDelete(req.params.id)

  res.status(204).json({
    status: 'success',
    data: null//no need to send data in a delete call
  })
})

exports.updataOne = catchAsync( async(req, res, next)=> {
  const doc = await Outdoor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  })
})

const mongoose = require('mongoose')
const slugify = require('slugify')

const outdoorSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, 'Il titolo è obbligatorio'],
    unique: true,
    trim: true,
    maxlength: [40, 'Max 40 caratteri'],
    minlength: [5, 'Min 5 caratteri']
  },
  slug: String,
  season : {
    type: String,
  },
  start : {
    type: String,
    trim: true,
    maxlength: [40, 'Max 40 caratteri']
  },
  where : {
    type: String,
  },
  duration : {
    type: Number,
  },
  km : {
    type: Number,
  },
  link1 : {
    type: String,
    trim: true,
  },
  link2 : {
    type: String,
    trim: true,
  },
  link3 : {
    type: String,
    trim: true,
  },
  link4 : {
    type: String,
    trim: true,
  },
  link5 : {
    type: String,
    trim: true,
  },
  altitude : {
    type: Number,
  },
  bike : {
    type: Boolean,
  },
  level : {
    type: String,
  },
  notes : {
    type: String,
    maxlength: [40, 'Max 40 caratteri']
  }
})

outdoorSchema.index({
  slug: 1
})

//DOCUMENT MIDDLEWARE
//si azione prima e dopo save() e create()
outdoorSchema.pre('save', function(next) {
  this.slug = slugify(this.name, {lower: true})
  next()
})

const Outdoor = mongoose.model('outdoor', outdoorSchema)
module.exports = Outdoor

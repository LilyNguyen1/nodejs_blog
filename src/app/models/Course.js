const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String, required:  true },
    desc: { type: String },
    image: { type: String },
    videoId: { type: String, required:  true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true,
  });
  
//Add plugins
mongoose.plugin(slug)
Course.plugin(mongooseDelete, 
  { overrideMethods: 'all',
    deletedAt: true,
    // countDocumentsDeleted: true,
  }
)

module.exports  = mongoose.model('Course', Course);
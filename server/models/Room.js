const mongoose = require('mongoose')
const getTime = require('../helpers/getTime')
const Schema = mongoose.Schema

const RoomSchema = new mongoose.Schema({
  name: {
    type: String
  },
  slogen: {
    type: String
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  participant: {
    type: Array
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  createDate: {
    type: Date,
    default: getTime()
  },
  msgs: {
    type: Array,
    default: []
  }
})
mongoose.model('room', RoomSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;

const linkSchema = new Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'id'
    },
    link:{
        type: String,
        required: true, 
    },
    new_link:{
        type: String,
        required: true, 
    },
  });

  module.exports = mongoose.model('link', linkSchema);
const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    public: {
      type: Boolean,
      required: true,
      default: true
    },
    timestamps: true,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('question', questionSchema)

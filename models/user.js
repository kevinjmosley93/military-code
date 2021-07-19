const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    jobSeeker: {
      type: Boolean,
      required: true,
      default: true
    },
    firstName: String,
    lastName: String,
    token: String,
    jobs: Array,
    jobCenters: Array,
    training: Array
  },
  {
    timestamps: true,
    toObject: {
      // remove `hashedPassword` field when we call `.toObject`
      transform: (_doc, user) => {
        delete user.hashedPassword
        return user
      }
    }
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

module.exports = User

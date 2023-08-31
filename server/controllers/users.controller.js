import User from '../models/User.js'

const users_get = async (req, res) => {
  await User.find().sort({ createdAt: -1 })
    .then(result => res.json(result))
    .catch(err => res.status(400).json({ message: err.message }))
}

export default {
  users_get
}
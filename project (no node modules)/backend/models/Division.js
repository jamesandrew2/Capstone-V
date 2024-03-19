const mongoose = require('mongoose');

const divisionSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  ouId: { type: mongoose.Schema.Types.ObjectId, ref: 'OrganizationalUnit', required: true },
  description: String,
});

module.exports = mongoose.model('Division', divisionSchema);
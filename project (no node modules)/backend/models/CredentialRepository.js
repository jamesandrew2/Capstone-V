const mongoose = require('mongoose');

const credentialRepositorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  divisionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Division', required: true },
  credentials: [{
    username: String,
    password: String,
    // Add additional credential fields as needed
  }],
});

module.exports = mongoose.model('CredentialRepository', credentialRepositorySchema);
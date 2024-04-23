const express = require('express');
const verifyToken = require('../middlewares/auth');
const CredentialRepository = require('../models/CredentialRepository');

const router = express.Router();

router.get('/:divisionId/credentials', verifyToken, async (req, res) => {
  try {
    const { divisionId } = req.params;
    const credentials = await CredentialRepository.find({ divisionId });
    res.json(credentials);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch('/:divisionId/assign-user/:userId', verifyToken, async (req, res) => {
    try {
      // Verify admin permissions
      const { divisionId, userId } = req.params;
      // Assume Division model has a users array
      const updatedDivision = await Division.findByIdAndUpdate(divisionId, { $addToSet: { users: userId } }, { new: true });
      res.json(updatedDivision);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  

module.exports = router;
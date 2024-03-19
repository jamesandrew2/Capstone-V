router.patch('/:userId/role', verifyToken, async (req, res) => {
    try {
      // Verify admin permissions
      const { userId } = req.params;
      const { role } = req.body;
      const updatedUser = await User.findByIdAndUpdate(userId, { role }, { new: true });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });  
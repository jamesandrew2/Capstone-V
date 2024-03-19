router.put('/:repoId/credential/:credentialId', verifyToken, async (req, res) => {
    try {
      // Verify user permissions
      const { repoId, credentialId } = req.params;
      const repo = await CredentialRepository.findById(repoId);
      const credential = repo.credentials.id(credentialId);
      Object.assign(credential, req.body);
      await repo.save();
      res.json(credential);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });  
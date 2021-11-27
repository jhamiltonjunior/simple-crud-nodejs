export const savePost = async (req, res) => {
  const { author } = req.body;

  res.json({ author });
};

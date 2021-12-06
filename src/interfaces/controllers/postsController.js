export default {
  async saveArticle(req, res) {
    res.json({
      id: 1,
      title: 'Meu segundo REST com postgreSQL',
      content: 'NaN',
      date: new Date(),
    });
  },
};

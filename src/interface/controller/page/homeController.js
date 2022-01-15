const content = {
  pageName: 'home',
  title: 'Priza Tech - Otimizando a Forma que Você Encotra Clientes',
};

export default {
  index(req, res) {
    res.render('page/home', { content });
  },
};

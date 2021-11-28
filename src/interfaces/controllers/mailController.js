import Queue from '../lib/Queue.js';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // adicionar job RegistrationMail na fila
    Queue.add('RegistrationMail', { user });

    // se eu quiser adicionar outra fila basta fazer isso:
    // Queue.add('OutherQueue', { user });

    res.json(user);
  },
};

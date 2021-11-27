import Mail from '../lib/Mail.js';

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Mail.sendMail({
      from: 'José Hamilton <hamilton@nauts.com.br>',
      to: `${name} <${email}>`,
      subject: 'Você foi cadastrado',
      html: `Bem-vindo ${name}, você foi cadastrado no nosso site`,
    });

    return res.json(user);
  },
};

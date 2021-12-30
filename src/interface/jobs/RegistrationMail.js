import Mail from '../lib/Mail.js';

/*
  para um job:
  um nome e dizer o que ele vai fazer já é o suficiente
*/

export default {
  // Para eu indetificar depois qual job falhou
  key: 'RegistrationMail',
  options: {
    // vai executar depois de 5s
    delay: 5000,
    // vai fazer até 3 retentativas
    attemps: 3,
  },
  async handle({ data }) {
    // destructuring dentro de outra
    const { user: { name, email } } = data;

    await Mail.sendMail({
      from: 'José Hamilton <hamilton@nauts.com.br>',
      to: `${name} <${email}>`,

      subject: 'Você foi cadastrado',
      html: `Bem-vindo ${name}, você foi cadastrado no nosso site`,
    });
  },
};

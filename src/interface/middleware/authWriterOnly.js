import jwt from 'jsonwebtoken';

export default {
  writer(req, res, next) {
    const authHeaders = req.headers.authorization;
    const { client } = req;

    if (!authHeaders) { res.status(401).json({ message: 'no token provided' }); }

    const parts = authHeaders.split(' ');

    if (parts.length !== 2) { res.status(401).json({ message: 'Token erro' }); }

    const [schema, token] = parts;

    if (!/^Bearer$/i.test(schema)) { res.status(401).json({ message: 'Token malformatted' }); }

    try {
      jwt.verify(token, process.env.KEY_FOR_WRITER, (err, decoded) => {
        if (err) {
          res.status(401).json({ message: 'Erro ao autenticar o token' });
        }

        client.idPeople = decoded.id;
        console.log(decoded);

        return next();
      });
    } catch (err) {
      console.log(err);
    }
  },
};

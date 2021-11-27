import jwt from 'jsonwebtoken';

const generateTokenForWriter = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) { res.status(401).json({ message: 'no token provided' }); }

  const parts = authHeaders.split(' ');

  if (parts.length !== 2) { res.status(401).json({ message: 'Token erro' }); }

  const [schema, token] = parts;

  if (!/^Bearer$/i.test(schema)) { res.status(401).json({ message: 'Token malformatted' }); }

  const { privateKeyForWriter } = process.env;

  jwt.sign(token, privateKeyForWriter, (err, decoded) => {
    const { user } = req;

    if (err) {
      res.status(401).json({ message: 'Erro ao autenticar o token' });
    }

    user.id = decoded.id;

    return next();
  });
};

export default generateTokenForWriter;

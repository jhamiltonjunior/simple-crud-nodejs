import jwt from 'jsonwebtoken';

export default (params = {}) => {
  const TREE_DAYS = 259200;

  const token = jwt.sign(params, process.env.KEY_FOR_WRITER, {
    expiresIn: TREE_DAYS,
  });

  return token;
};

import jwt from 'jsonwebtoken';

export default (params = {}) => {
  const TREE_DAYS = 259200;

  const token = jwt.sign(params, 'privatekey', {
    expiresIn: TREE_DAYS,
  });

  return token;
};

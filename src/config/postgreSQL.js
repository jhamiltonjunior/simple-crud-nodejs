import knexConfig from 'knex';
import knexfile from '../../knexfile.js';

const knex = knexConfig(knexfile.development);

export default knex;

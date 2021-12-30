import nodemailer from 'nodemailer';

import mailerConfig from '../../config/mail.js';

export default nodemailer.createTransport(mailerConfig);

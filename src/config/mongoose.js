import mongoose from 'mongoose';

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.CONNECTION_DB, options);

// mongoose.connection.dropDatabase();

export default mongoose;

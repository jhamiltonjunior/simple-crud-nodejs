import mongoose from '../../../config/mongoose.js';

const { Schema, model } = mongoose;

const postSchema = new Schema({
  header: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comments: [{
    body: String,
    date: Date,
  }],
  date: {
    type: Date,
    default: Date.now,
  },
  hidden: Boolean,
  category: {
    type: String,
    required: true,
  },
  social: {
    votes: Number,
    favs: Number,
  },
});

const Post = model('Post', postSchema);

export default Post;

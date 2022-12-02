import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id:Number,
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    userName: String,
    title: String,
    time: String,
    image: String,
    replies: Number,
    retuits: Number,
    handle: String,
}, {collection: 'tuits'});
export default schema;
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    age: Number,
    status : String,
    avatar: String,
}
)
const User = mongoose.model('user', userSchema);
export {User};

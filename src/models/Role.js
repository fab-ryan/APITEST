import mongoose from 'mongoose';
const schema=mongoose.Schema;
const roleSchema=new schema({
    name:String,
    create_at:{
        type:Date,
        default:new Date(),
    },
});
export default mongoose.model('role',roleSchema);
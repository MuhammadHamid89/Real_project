// import mongoose from "mongoose"
// const studentScheme=new mongoose.Schema({
//     name:String,
//     age:Number,
//     isActive:Boolean,
//     joinedAt:Date,
//     skills:[String]
// })


// esy bi likh skty hian
import mongoose from "mongoose"


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 18,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    course: {
        type: String,
        default: 'mern stack',
    },
    isActive: {
       type: Boolean,
       default: true
    },
    skills: [String]
}, {
    timestamps: true, // Yeh yahan schema options mein aayega (bracket ke bahar)
});


const Student = mongoose.model('Student', studentSchema);
export default Student;

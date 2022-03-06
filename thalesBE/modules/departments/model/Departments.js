
import mongoose from 'mongoose'

import { v4 as uuid } from 'uuid';


const Schema = mongoose.Schema;

const DepartmentsSchema = new Schema({
    _id: { type: String, required: true, default: () => uuid() },

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('departments', DepartmentsSchema);
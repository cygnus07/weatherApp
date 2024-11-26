import mongoose from 'mongoose'
import { createDeflate } from 'zlib'

const cacheSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        unique: true,
    },
    data: {
        type: Object,
        required: true,
    },
    createdAt: {
        type: Date,
        expires: 3600,
        default: Date.now
    }
})

const Cache = mongoose.model("Cache", cacheSchema)
export default Cache
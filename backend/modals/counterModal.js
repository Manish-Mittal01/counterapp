const { model, Schema } = require("mongoose");

const counterSchema = Schema({
    num: {
        type: Number,
        required: true
    }
}, { versionKey: false })

module.exports = model("counterValue", counterSchema)
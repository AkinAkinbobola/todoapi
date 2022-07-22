const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    completed:{
        type: Boolean,
        default: false
    },
    deadline:{
        type: Date,
        default: new Date()
    }

});

TodoSchema.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model("Todo-list", TodoSchema);

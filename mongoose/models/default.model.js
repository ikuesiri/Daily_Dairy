const mongoose = require("mongoose");

const composeSchema = ({
    title : String,
    content: String
})
const Compose = mongoose.model("Compose", composeSchema);
module.exports = Compose;

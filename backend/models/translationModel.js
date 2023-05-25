const mongoose = require ('mongoose');

const translationSchema = new mongoose.Schema ({
  text: {type: String, required: true},
  targetLang: {type: String, required: true},
  translatedText: {type: String},
});

module.exports = mongoose.model ('Translation', translationSchema);

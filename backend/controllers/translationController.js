// controllers/translationController.js

const Translation = require ('../models/translationModel');

// Create a new translation
exports.createTranslation = async (req, res) => {
  try {
    const {text, targetLang} = req.body;
    const translationData = new Translation ({text, targetLang});
    await translationData.save ();
    res.status (201).json ({translationData, success: true});
  } catch (error) {
    res
      .status (500)
      .json ({success: false, message: 'Translation creation failed'});
  }
};

// Get all translations
exports.getTranslations = async (req, res) => {
  try {
    const translationData = await Translation.find ();
    res.status (200).json ({translationData, success: true});
  } catch (error) {
    res
      .status (500)
      .json ({success: false, message: 'Failed to fetch translations'});
  }
};

// Get a specific translation by ID
exports.getTranslationById = async (req, res) => {
  try {
    const translationData = await Translation.findById (req.params.id);
    if (!translationData) {
      return res
        .status (404)
        .json ({success: false, message: 'Translation not found'});
    }
    res.status (200).json ({translationData, success: true});
  } catch (error) {
    res
      .status (500)
      .json ({success: false, message: 'Failed to fetch translation'});
  }
};

// Update a translation by ID
exports.updateTranslation = async (req, res) => {
  try {
    const translationData = await Translation.findByIdAndUpdate (
      req.params.id,
      req.body,
      {new: true}
    );
    if (!translationData) {
      return res
        .status (404)
        .json ({success: false, message: 'Translation not found'});
    }
    res.status (201).json ({
      translationData,
      success: true,
      message: 'Translation updated Successfully',
    });
  } catch (error) {
    res
      .status (500)
      .json ({success: false, message: 'Failed to update translation'});
  }
};

// Delete a translation by ID
exports.deleteTranslation = async (req, res) => {
  try {
    const translationData = await Translation.findByIdAndDelete (req.params.id);
    if (!translationData) {
      return res
        .status (404)
        .json ({success: false, message: 'Translation not found'});
    }
    res.status (200).json ({message: 'Translation deleted successfully'});
  } catch (error) {
    res
      .status (500)
      .json ({success: false, message: 'Failed to delete translation'});
  }
};

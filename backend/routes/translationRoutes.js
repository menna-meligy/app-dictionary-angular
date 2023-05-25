// routes/translationRoutes.js

const express = require ('express');
const router = express.Router ();
const translationController = require ('../controllers/translationController');

// Create a new translation
router.post ('/', translationController.createTranslation);

// Get all translations
router.get ('/', translationController.getTranslations);

// Get a specific translation by ID
router.get ('/:id', translationController.getTranslationById);

// Update a translation by ID
router.put ('/:id', translationController.updateTranslation);

// Delete a translation by ID
router.delete ('/:id', translationController.deleteTranslation);

module.exports = router;

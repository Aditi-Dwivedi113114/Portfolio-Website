const express = require('express');
const router = express.Router();
const FormData = require('../models/database');

router.post('/submit-form', (req, res) => {
 
  const { name, email, phone, message } = req.body;

  FormData.create({
    name: name,
    email: email,
    phone: phone,
    message: message
  })
 
  .then(() => {
    res.json({ message: 'Form data received and saved' });
    
  })
  .catch(error => {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: 'Error saving form data' });
  });
});

module.exports = router;

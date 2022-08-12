const express = require('express');
const Link = require('../models/Links');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.post('/new_url', [
  body('link', 'Enter a valid name').isURL(),
], async (req, res) => {
  // If there are errors, return Bad request and the errors

  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json("{ errors: errors.array() }");
  }


  let n_link = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
  try {
    let link = await Link.create({
      link: req.body.link,
      new_link: n_link,
    });

    success = true;
    res.json({ n_link })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})


router.get('/get_url', async (req, res) => {
  try {
    const url = await Link.find({ new_link: req.header('new_link') });
    res.json(url)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

module.exports = router
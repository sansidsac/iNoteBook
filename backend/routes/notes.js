const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const {body, validationResult} = require('express-validator');

//Route 1: Get all the notes using: GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async(req, res) => {
    try{
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route 2: Add a new note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser,[
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('tag', 'Tag must be atleast 3 characters').isLength({ min: 3 })
], async(req, res) => {
    try{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const note= new Notes({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user: req.user.id
    })
    const savedNote = await note.save();

    res.json(savedNote)
    }catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')


router.post('/patients/uploadImage', upload.image(), (req, res) => {
    console.log(req.file)
    res.send('upload ok')
})

module.exports = router
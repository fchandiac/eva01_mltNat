const express = require('express')
const router = express.Router()
const patients = require('../database/controllers/patients')



router.post('/patients', (req, res) => {
    patients.create(req.body.rut, req.body.nombre, req.body.edad, req.body.sexo, req.body.fotoPersonal, req.body.enfermedad)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
    
})

router.get('/patients', (req, res) => {
    patients.findAll()
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/patients/findOneById', (req, res) => {
    patients.findOneById(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.post('/patients/update', (req, res) => {
    patients.update(req.body.id, req.body.rut, req.body.nombre, req.body.edad, req.body.sexo, req.body.fotoPersonal, req.body.enfermedad)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/patients', (req, res) => {
    patients.destroy(req.body.id)
    .then(data => {
        res.json(data)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router
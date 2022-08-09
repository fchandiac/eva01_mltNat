const { Patients } = require('../db')

patients = {}




async function create(rut, nombre, edad, sexo, fotoPersonal, enfermedad) {
    const patient = await Patients.create({
        rut: rut,
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        fotoPersonal: fotoPersonal,
        enfermedad: enfermedad
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return patient


}

async function findAll() {
    const patient = await Patients.find().then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return patient
}

async function update(id, rut, nombre, edad, sexo, fotoPersonal, enfermedad) {
    const patient = await Patients.updateOne({ _id: id }, {
        rut: rut,
        nombre: nombre,
        edad: edad,
        sexo: sexo,
        fotoPersonal: fotoPersonal,
        enfermedad: enfermedad
    }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return patient
}

async function destroy(id) {
    const patient = await Patients.deleteOne({ _id: id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return patient
}

async function findOneById(id) {
    const patient = await Patients.findOne({ _id: id }).then(data => { return { 'code': 1, 'data': data } }).catch(err => { return { 'code': 0, 'data': err } })
    return patient
}

patients.create = create
patients.findAll = findAll
patients.update = update
patients.destroy = destroy
patients.findOneById = findOneById

module.exports = patients
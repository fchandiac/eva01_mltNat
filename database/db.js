const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/hospital'
const db = {}





mongoose.connect(url, {})
.then(res => { console.log('connected MongoDb') })
.catch(err => { console.log(err) })

const patientsSchema = mongoose.Schema({
    rut: String,
    nombre: String,
    edad: Number,
    sexo: String,
    fotoPersonal: { type: String, default: '' },
    fechaIngreso: { type: Date, default: Date.now },
    enfermedad: { type: String, default: '' },
    revisado:  { type: Boolean, default: false }
}, {versionKey: false})




db.Patients = mongoose.model('patients', patientsSchema)



module.exports = db







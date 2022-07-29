'use strict'

const Form = require('../models/form.model');
const { validateData, validateAge, eDate } = require("../utils/validate");

exports.addForm = async (req, res) => {
    try {
        const params = req.body;
        const data = {
            carnet: params.carnet,
            name: params.name,
            address: params.address,
            gender: params.gender,
            phone: params.phone,
            birthDate: new Date(params.birthDate),
            subject: params.subject,
            themeGender: params.themeGender,
            inscription: new Date(),
        }
        const validate = validateData(data);
        if (validate) return res.status(400).send(validate);
        //validaciones de carnet
        data.carnet = data.carnet.split("")
        data.carnet[2] = '5'
        for (let c of data.carnet) {
            if (c == 0) return res.send({ message: 'There should not be \'0\' on the card' })
        }
        if (data.carnet.length > 6) return res.status(400).send({ message: 'Only accept 6 characters' });
        if (data.carnet[0] != 'A') return res.status(400).send({ message: 'First character should only be \'A\'' });
        if (data.carnet[2] != '5') return res.status(400).send({ message: 'Third character should only be \'5\'' })
        if (data.carnet[5] != ('1' || '3' || '9')) return res.status(400).send({ message: 'Carnet can only end in 1, 3 or 9 ' });
        data.carnet = data.carnet.toString()
        data.carnet = data.carnet.replace(/,/g, "");


        //validaciones de género
        if (data.gender == 'femenino' || data.gender == 'masculino') {
            //validaciones de edad
            const age = validateAge(data.inscription, data.birthDate);
            if (age == false) return res.status(401).send({ message: 'Only accept people over 17 years old' });

            //validaciones de genero de poesía
            if (data.themeGender == 'lírica' || data.themeGender == 'épica' || data.themeGender == 'dramática') {
                //fecha de exposición
                //const eDates = eDate(data.carnet, data.themeGender, data.inscription)
                //console.log(eDates)

                const userData = new Form(data);
                await userData.save();
                return res.send({ message: 'Your form has been sended', data })
            } else return res.status(400).send({ message: 'Invalid theme' })

        } else return res.status(400).send({ message: 'Invalid params' })



    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}


exports.getForms = async (req, res) => {
    try {
        const forms = await Form.find({}).lean({});
        if (!forms) return res.status(404).send({ message: 'Forms not found' })
        return res.send({ message: 'Forms found:', forms })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

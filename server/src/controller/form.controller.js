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
        if (data.carnet[2] != '5') return res.status(400).send({ message: 'El tercer carácter tiene que ser \'5\'' })
        data.carnet[2] = '5'
        for (let c of data.carnet) {
            if (c == 0) return res.send({ message: 'No puede haber \'0\' en el carnet' })
        }
        if (data.carnet.length > 6) return res.status(400).send({ message: 'Solo se aceptan 6 caracteres' });
        if (data.carnet[0] != 'A') return res.status(400).send({ message: 'El primer carácter tiene que ser una \'A\' mayúscula' });
        if (data.carnet[5] == '1' || data.carnet[5] == '3' || data.carnet[5] == '9') {
            data.carnet = data.carnet.toString()
            data.carnet = data.carnet.replace(/,/g, "");


            //validaciones de género
            if (data.gender == 'femenino' || data.gender == 'masculino') {
                //validaciones de edad
                const age = validateAge(data.inscription, data.birthDate);
                if (age == false) return res.status(401).send({ message: 'Solo se aceptan mayores de 17 años' });

                //validaciones de genero de poesía
                if (data.themeGender == 'lírica' || data.themeGender == 'épica' || data.themeGender == 'dramática') {
                    //fecha de exposición
                    const eDates = eDate(data.carnet, data.themeGender, data.inscription)
                    data.exhibitioDate = new Date(eDates)


                    const userData = new Form(data);
                    await userData.save();
                    return res.send({ message: 'Tú formulario ha sido enviado', data })
                } else return res.status(400).send({ message: 'Tema inválido' })

            } else return res.status(400).send({ message: 'Género inválido' })
        } else return res.status(400).send({ message: 'El carnet solo puede terminar en 1, 3 o 9 ' });




    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}


exports.getForms = async (req, res) => {
    try {
        const forms = await Form.find({}).lean({});
        if (!forms) return res.status(404).send({ message: 'Formularios encontrados' })
        return res.send({ message: 'Formularios encontrados:', forms })
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

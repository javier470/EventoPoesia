'use strict'

exports.validateData = (data) => {
    let keys = Object.keys(data), msg = '';
    for (let key of keys) {
        if (data[key] !== null && data[key] !== undefined && data[key] !== '') continue;
        msg += `Param (${key}) is required\n`;
    }
    return msg.trim();
}


exports.validateAge = (today, birth) => {
    try {
        let confirm = true

        let age = today.getFullYear() - birth.getFullYear();
        let month = today.getMonth() - birth.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) age--;
        if (age < 17) {
            confirm = false
        }
        return confirm
    } catch (err) {
        console.log(err);
        return err
    }
}

exports.eDate = (carnet, theme, date) => {
    try {
        let time = date.getDate();
        let weekDay = date.getDay();
        let less = 0
        let c = carnet.split("");
        if (c[5] == '1' && theme == 'dramática') {
            
        }
        return time
    } catch (err) {
        console.log(err);
        return err
    }
}
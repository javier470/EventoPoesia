'use strict'

exports.validateData = (data) => {
    let keys = Object.keys(data), msg = '';
    for (let key of keys) {
        if (data[key] !== null && data[key] !== undefined && data[key] !== '') continue;
        msg += `El parámetro ${key} es necesario.\n`;
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
        let days = 0
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let c = carnet.split("");
        if (c[5] == '1' && theme == 'dramática') {
            days = 5
            const final = this.isWeekend(date, parseInt(days));
            return final
        }

        return week
    } catch (err) {
        console.log(err);
        return err
    }
}

exports.isWeekend = (date, num) => {
    try {
        let weekend = date.getDay() + num
        date.setDate(date.getDate() + num)
        if ((weekend >= 6) || (weekend == 0)) {
            date.setDate(date.getDate() + 2)
        }


        return date
    } catch (err) {
        console.log(err);
        return err
    }
}
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
        } else if (c[5] == '3' && theme == 'épica') {
            const final = this.isLastWeek(lastDay)
            return final
        } else {
            const final = this.isFriday(date)
            return final
        }

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

exports.isLastWeek = (date) => {
    try {
        let weekend = date.getDay()
        date.setDate(date.getDate())
        if ((weekend == 6)) {
            date.setDate(date.getDate() - 1)
        } else if ((weekend == 0)) {
            date.setDate(date.getDate() - 2)
        }
        return date
    } catch (err) {
        console.log(err);
        return err
    }
}

exports.isFriday = (date) => {
    try {
        let weekend = date.getDay()
        date.setDate(date.getDate())
        while (weekend > 5) {
            weekend--
            date.setDate(date.getDate() - 1)
        }
        while (weekend < 5) {
            weekend++
            date.setDate(date.getDate() + 1)
        }

        return date
    } catch (err) {
        console.log(err);
        return err
    }
}
export class FormModel {
    constructor(
        public id: string,
        public carnet: String,
        public name: String,
        public address: String,
        public gender: String,
        public phone: String,
        public birthDate: Date,
        public subject: String,
        public themeGender: String,
        public inscription: Date,
        public exhibitioDate: Date
    ) { }
}
export class RegistrationRequest{
    public name: string;
    public surname: string;
    public patronymic: string;
    public email: string;
    public password: string;
    public phoneNumber: string;
    public sex: string;
    public educationForm: string;
    public isPayd: string;
    public groupNumber: string;
    public DOB: string;


    constructor(name: string, surname:string, patronymic: string, email: string, password: string, phoneNumber: string, sex: string, educationForm: string, isPayd: string, groupNumber: string, DOB: string){
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.sex = sex;
        this.educationForm = educationForm;
        this.isPayd = isPayd;
        this.groupNumber = groupNumber;
        this.DOB = DOB;
    }
}
export class CompanyDetails{

    constructor(CompanyName : string,RegistrationNumber:number,Address:string,Phone:number,Email:string,Type:string,isActive:boolean){

        this.CompanyName = CompanyName;
        this.RegistrationNumber = RegistrationNumber;
        this.Address = Address;
        this.Phone = Phone;
        this.Email = Email;
        this.Type = Type;
        this.isActive = isActive;

    }

    CompanyName : string;
    RegistrationNumber:number;
    Address:string;
    Phone:number;
    Email:string;
    Type:string;
    isActive:boolean;



}
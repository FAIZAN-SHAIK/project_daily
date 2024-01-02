import { Injectable } from "@angular/core";
import { login } from "./login";
import { CompanyDetails } from "./company";
// import { CompanyEditService } from "./company-edit.service";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  userLogined: string = ""
  newUser: string = ""
  objToEditCompany = {};

  predefinedLoginDetails: login[] = 
  [
    new login("faizan","faizu123","superAdmin"),
    new login("amod","amod123","admin"),
    new login("prateek","pratek123","superAdmin"),
    new login("kruteek","kruteek123","admin"),
    new login("shoaib","shoaib123","admin")

  ];

  companyDetail: CompanyDetails[] = 
  [
      new CompanyDetails("ABC Electronics",12345,"123 Main St, Cityville, ST, 54321",1234567,"info@abc-electronics.com","Tech",true),
      new CompanyDetails("XYZ Pharmaceuticals",54321,"456 Oak Ave, Townsville, ST, 12345",9876543,"info@xyzpharma.com","pharma",false),
      new CompanyDetails("Tech Innovators Inc.",67890,"789 Tech Park, Innovation City, ST, 98765",4567890,"info@techinnovators.com","Tech",true),
      new CompanyDetails("Green Energy Solutions",34567,"234 Renewable St, Ecotown, ST, 45678",2345678,"info@greenenergy.com","pharma",false),
      new CompanyDetails("Fashion Trends Ltd.",89012,"567 Fashion Ave, Style City, ST, 34567",5678901,"info@fashiontrends.com","clothing",true)
  ];

  getAccessType() : string {
    // if ((this.userLogined === this.newUserNameAfterSignUp)) {
    //   this.newUser = this.newUserAccessAfterSignUp;
    // }
    // else{
     for(let item of this.predefinedLoginDetails){
      if(item.uName === this.userLogined){
        this.newUser = item.type;
      }
     } 
     return this.newUser

    // }
  }

  addNewUser(newUsername : string,newUserPassword : string,newUserType : string)
  {
     let newUser = new login(newUsername,newUserPassword,newUserType)
     this.predefinedLoginDetails.push(newUser)
  }


  createCompany(CompanyName : string,RegistrationNumber:number,Address:string,Phone:number,Email:string,Type:string,isActive:boolean)
  {
    let newCompanyEntry = new CompanyDetails(CompanyName,RegistrationNumber,Address,Phone,Email,Type,isActive)
    this.companyDetail.push(newCompanyEntry)
  }




}
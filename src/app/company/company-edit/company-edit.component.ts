import { Component, OnInit } from "@angular/core";
import { AppService } from "../../app.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanyDetails } from "../company";

@Component({
  selector: "app-company-edit",
  templateUrl: "./company-edit.component.html",
  styleUrls: ["./company-edit.component.css"],
})
export class CompanyEditComponent implements OnInit {
  reCompanyName: string = "";
  reRegistrationNumber: number = 0;
  reAddress: string = "";
  rePhone: number  = 0;
  reEmail: string = "";
  reFounder: string = "";

  dontHideSaveAndDonot = false;
  objFromCompany: any = [];

  idToEdit: any;

  constructor(
    private serviceCompanyEdit: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((data) => {
      this.idToEdit = Number(data.get("id"))

      this.objFromCompany = this.serviceCompanyEdit.companyDetail.find((x) => {
       return x.RegistrationNumber === this.idToEdit 
      })
     
    })

  //   this.reCompanyName = this.objFromCompany.CompanyName;
  //   this.reRegistrationNumber = this.objFromCompany.RegistrationNumber;
  //   this.reAddress = this.objFromCompany.Address;
  //   this.rePhone = this.objFromCompany.Phone;
  //   this.reEmail = this.objFromCompany.Email;
  //   this.reFounder = this.objFromCompany.Founder;
  }

  onSave() {

    this.serviceCompanyEdit.companyDetail.find((x) => {
       
      if(x.RegistrationNumber === this.idToEdit){

          x.CompanyName = this.reCompanyName;
          x.RegistrationNumber = this.reRegistrationNumber;
          x.Address = this.reAddress;
          x.Phone = this.rePhone;
          x.Email = this.reEmail;
    
      } 
    })
    
    this.router.navigate(["../company"]);
    alert("Changes Saved Successfully....");
  }

  ondont() {
    alert("No Changes Found...");
    this.router.navigate(["../company-edit"]);
  }
}

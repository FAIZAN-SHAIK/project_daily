import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  reCompanyName: string = "";
  reRegistrationNumber: number | undefined ;
  reAddress: string = "";
  rePhone: number | undefined ;
  reEmail: string = "";
  reFounder: string = ""

  dontHideSaveAndDonot = false;
  objFromCompany: any;

  constructor(
    private serviceCompanyEdit: AppService,
    private router:Router,
    private route :ActivatedRoute
    ) {}
  
  ngOnInit(): void 
  {
    this.objFromCompany = this.serviceCompanyEdit.objToEditCompany;
    this.reCompanyName = this.objFromCompany.CompanyName;
    this.reRegistrationNumber = this.objFromCompany.RegistrationNumber;
    this.reAddress = this.objFromCompany.Address;
    this.rePhone = this.objFromCompany.Phone;
    this.reEmail = this.objFromCompany.Email;
    this.reFounder = this.objFromCompany.Founder;
  }

  onSave() 
  {
    this.objFromCompany.CompanyName = this.reCompanyName;
    this.objFromCompany.RegistrationNumber = this.reRegistrationNumber;
    this.objFromCompany.Address = this.reAddress;
    this.objFromCompany.Phone = this.rePhone;
    this.objFromCompany.Email = this.reEmail;
    this.objFromCompany.Founder = this.reFounder;
    this.router.navigate(['../company'])
    alert("Changes Saved Successfully....")
  }
  
  ondont()
  {
    alert("No Changes Found...")
    this.router.navigate(['../company-edit'])
  }



}

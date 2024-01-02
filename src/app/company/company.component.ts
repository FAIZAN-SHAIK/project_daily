import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { CompanyDetails } from "../company";
import { ActivatedRoute, Router } from "@angular/router";



@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit 
{
  companyInfo: CompanyDetails[] = [];
  userPermissionType : string = ""

  compNameSearch : string = '';
  objToEditCompany = {};
 

  constructor(
    private serviceInCompany: AppService,
    private router:Router,
    private activeRoute :ActivatedRoute
    ) 
    { 
      this.userPermissionType = this.serviceInCompany.getAccessType();
    }

  onClickEditButton(obj: any) 
  {
    this.serviceInCompany.objToEditCompany = obj;
    this.router.navigate(['company-edit'],{relativeTo:this.activeRoute})
  }

  logoutClicked()
  {
    this.router.navigate(['/login'])
  }
  
  ngOnInit() 
  {
      this.companyInfo = this.serviceInCompany.companyDetail
  }
}
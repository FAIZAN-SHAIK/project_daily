import { Component } from "@angular/core";


import { AppService } from "../app.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})


export class LoginComponent 
{
  userNameLoginPage = "";
  passwordLoginPage = "";
  userFound = false;  

  constructor(
    private loginDetailDataService: AppService,
    private router:Router,
    private activeRoute : ActivatedRoute)
     {}


  loginButtonClicked() 
  {
    if (this.userNameLoginPage === '' || this.passwordLoginPage === '') 
    {
      alert("details are mandatory")
    }
    else 
    {
        for (let i of this.loginDetailDataService.predefinedLoginDetails) 
        {
          if (i.uName === this.userNameLoginPage && i.password === this.passwordLoginPage) 
          {
            this.loginDetailDataService.userLogined = this.userNameLoginPage
            this.userFound = true;
            this.router.navigate(['/company']);
            break;
          }
        }

        if(this.userNameLoginPage !=='' && this.passwordLoginPage!== '' && !this.userFound ) 
        {
          alert("You Dont have account , Create One!!");
          this.userNameLoginPage = "";
          this.passwordLoginPage = "";
        }
    }
  }

  signUpButtonClicked() 
  {
    this.router.navigate(['/signup'])
  }


  
}

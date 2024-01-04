import { Component} from '@angular/core';
import { login } from '../login';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  
{
  userNameSignUpPage: string = ""
  PasswordSignUpPage: string = ""
  reEnterPasswordSignUPPage: string = ""
  UserAccessSignUpPage :string = ""
  checkUserRepeated = false;
  chechUsersToLogin: login[]

  constructor(
    private signUpPageService: AppService,
    private router:Router
    ) 
  {
    this.chechUsersToLogin = signUpPageService.predefinedLoginDetails
    
  }

  newRegistration()
  {
    this.signUpPageService.predefinedLoginDetails.find((item)=>{
      if (item.uName === this.userNameSignUpPage) {
        this.checkUserRepeated = true;
        
      }
    })


    if (this.checkUserRepeated === false) 
    {

      if (this.userNameSignUpPage === '' || this.PasswordSignUpPage === '' || this.reEnterPasswordSignUPPage === '' || this.UserAccessSignUpPage ==='') {
        alert("Details are mandatory")
          this.userNameSignUpPage = ''
          this.PasswordSignUpPage = ''
          this.reEnterPasswordSignUPPage = ''
      }
      else if (this.PasswordSignUpPage === this.reEnterPasswordSignUPPage) {

        this.signUpPageService.addNewUser(this.userNameSignUpPage,this.PasswordSignUpPage,this.UserAccessSignUpPage)
        this.router.navigate(['/login'])
      }
      else {
        alert("password mismatch")
        this.userNameSignUpPage = ''
          this.PasswordSignUpPage = ''
          this.reEnterPasswordSignUPPage = ''
        
      }
    }
    else {
      alert("you are already our user")
          this.userNameSignUpPage = ''
          this.PasswordSignUpPage = ''
          this.reEnterPasswordSignUPPage = ''
    }
  }
  

}

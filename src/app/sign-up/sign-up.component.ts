import { Component} from '@angular/core';
import { login } from '../login';
import { AppService } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent  {

  //`gettings details from signup page form using ngModel

  userNameSignUpPage: string = ""
  PasswordSignUpPage: string = ""
  reEnterPasswordSignUPPage: string = ""
  UserAccessSignUpPage :string = ""

  //variable to check did user repeated ?
  checkUserRepeated = false;

  //accessing the predefined details of login page from AppService
  chechUsersToLogin: login[]

  


  // creating a instance of service - AppService

  constructor(private signUpPageService: AppService,private router:Router) 
  {
    this.chechUsersToLogin = signUpPageService.predefinedLoginDetails
    
  }

  newRegistration() {

    for (let item of this.signUpPageService.predefinedLoginDetails) {
      if (item.uName === this.userNameSignUpPage) {
        this.checkUserRepeated = true;
        break
      }
    }

    

    

    if (this.checkUserRepeated === false) {

      if (this.userNameSignUpPage === '' || this.PasswordSignUpPage === '' || this.reEnterPasswordSignUPPage === '' || this.UserAccessSignUpPage ==='') {
        alert("Details are mandatory")
          // this.userNameSignUpPage = ''
          // this.PasswordSignUpPage = ''
          // this.reEnterPasswordSignUPPage = ''
      }
      else if (this.PasswordSignUpPage === this.reEnterPasswordSignUPPage) {

        this.signUpPageService.addNewUser(this.userNameSignUpPage,this.PasswordSignUpPage,this.UserAccessSignUpPage)
        
        // this.signUpPageService.showSignUpPage = false;                                                //check this line
        // this.signUpPageService.showLoginPage = true;
        this.router.navigate(['/login'])

        
        // this.signUpPageService.newUserNameAfterSignUp = this.userNameSignUpPage
        
        // this.signUpPageService.newUserPasswordAfterSignUp = this.PasswordSignUpPage
        
        // this.signUpPageService.newUserAccessAfterSignUp = this.UserAccessSignUpPage
      }
      else {
        alert("password mismatch")
        // this.userNameSignUpPage = ''
        //   this.PasswordSignUpPage = ''
        //   this.reEnterPasswordSignUPPage = ''
      }
    }
    else {
      alert("you are already our user")
      // this.userNameSignUpPage = ''
      //     this.PasswordSignUpPage = ''
      //     this.reEnterPasswordSignUPPage = ''
    }
  }
  

}

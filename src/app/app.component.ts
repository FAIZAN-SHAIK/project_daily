import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { login } from './login';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent  {

  showLoginOrNot : boolean = false;
  showSignUpOrNot : boolean  = false;
  showCompanyOrNot : boolean = false;

  constructor( private appcompService : AppService){
    
  }
}

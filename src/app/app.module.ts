import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CompanyComponent } from "./company/company.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CompanyEditComponent } from "./company/company-edit/company-edit.component";
import { PermissionDirective } from "./permission.directive";
import { TitleCasePipe } from "./title-case.pipe";
import { FilterTablePipe } from "./filter-table.pipe";
import { RouterModule, Routes } from "@angular/router";
import { CompanyDetailComponent } from "./company/company-detail/company-detail.component";
import { injectComponentFactoryResolver } from "@angular/core/src/render3";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  {
    path: "company",
    loadChildren: () =>
      import("src/app/company/company.module").then((m) => m.CompanyModule),
  },
  {
    path:'new',
    loadChildren:()=>import("src/app/new/new.module").then((x)=>x.NewModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

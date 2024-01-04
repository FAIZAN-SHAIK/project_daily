import { NgModule } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: CompanyComponent },
  { path: "company-edit", component: CompanyEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyRoutingModule {}

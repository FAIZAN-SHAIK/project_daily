import { NgModule } from "@angular/core";
import { CompanyComponent } from "./company.component";
import { CompanyEditComponent } from "./company-edit/company-edit.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CompanyRoutingModule } from "./company-routing.module";
import { PermissionDirective } from "../permission.directive";
import { FilterTablePipe } from "../filter-table.pipe";
import { TitleCasePipe } from "../title-case.pipe";

@NgModule({
  declarations: [
    CompanyComponent,
    CompanyEditComponent,
    CompanyDetailComponent,
    PermissionDirective,
    TitleCasePipe,
    FilterTablePipe,
  ],
  imports: [CommonModule, FormsModule, CompanyRoutingModule],
  exports: [],
})
export class CompanyModule {}

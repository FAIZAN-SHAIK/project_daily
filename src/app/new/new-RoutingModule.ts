import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { New1Component } from "./new1/new1.component";
import { New2Component } from "./new2/new2.component";

const routes: Routes = [
  { path: "", component: New1Component },
  { path: "new2", component: New2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { New2Component } from './new2/new2.component';
import { New1Component } from './new1/new1.component';
import { NewRoutingModule } from './new-RoutingModule';

@NgModule({
  declarations: [
    New1Component,
    New2Component],
  imports: [
    CommonModule,
    NewRoutingModule
  ]
})
export class NewModule { }

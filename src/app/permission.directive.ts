import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  constructor(private templateRef: TemplateRef<ElementRef>, private view: ViewContainerRef) {
    
   }

   

  @Input() set appPermission(permission: string){
    // console.log(permission)
    if(permission === "superAdmin"){
      
      this.view.createEmbeddedView(this.templateRef);
    }
    
  }
  ngOnInit(){

  }

}

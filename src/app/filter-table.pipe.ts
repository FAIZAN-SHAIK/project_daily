import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filterPipe'
})

export class FilterTablePipe implements PipeTransform{

    transform(companyObj: any[], compProp : string , compName:string) {
        
        if(compName === '' || companyObj.length === 0 || compProp === ''){
            return companyObj;
        }
        else{

            return companyObj.filter((companyObj)=>{
               
                   return companyObj[compProp].toLowerCase().includes(compName.toLowerCase())
            })
            

        }
    }

  

}
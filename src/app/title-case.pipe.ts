import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})

export class TitleCasePipe implements PipeTransform {
    transform(value: any) {

        if (!value) return value;

        return value.split(' ').map((word: any) => {
            return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
        }).join(' ');
    }
}
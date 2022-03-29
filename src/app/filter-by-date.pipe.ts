import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate'
})
export class FilterByDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newVal = value.sort((a: any, b: any) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);

        if (date1 > date2) {
            return 1;
        } else if (date1 < date2) {
            return -1;
        } else {
            return 0;
        }
    });

    return newVal;
}
}

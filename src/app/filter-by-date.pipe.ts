import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByOrder'
})
export class FilterByDatePipe implements PipeTransform {

    transform(value: any, arg: any): any {
        console.log(value)
        // const resultFilter = [];
        // for (const order of value) {
        //     if (order.status.indexOf(arg) > -1) {
        //         resultFilter.push(order)
        //     };
        // };
        //return resultFilter
        return 0
    }
}

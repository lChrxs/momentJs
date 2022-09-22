import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment'

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  /**
   * It takes a date string, and returns a new date string based on the arguments passed to it
   * @param {string} value - The value of the date string.
   * @param {any[]} args - Arguments to format de date.
   * @param {string} args[0] - Type of the format, could be 'F' for Format, 'R' for Relative Time or 'C' for Calendar Time.
   * @param {string} args[1] - If args[0] is 'F', args[1] is the format to change the date, example 'dddd'.
   * @param {string} args[1] - If args[0] is 'C' args[1] is the operation, 'S' for substract and 'A' for Add.
   * @param {number} args[2] - The number of days tu add or substract to the date.
   */
  transform(value: string, ...args: any[]): string {
    let newDate = '';

    switch (args[0]) {
      case 'F': return moment(value).format(args[1]);
      case 'R': return moment(value, 'YYYY-MM-DD').fromNow();
      case 'C': 
        if(args[1] === 'S'){
          return value = moment(value).subtract(args[2], 'days').calendar();
        }else if(args[1] === 'A'){
          return value = moment(value).add(args[2], 'days').calendar();
        }else return 'Invalid args'

      default: return 'Invalid args'
    }
  }

}

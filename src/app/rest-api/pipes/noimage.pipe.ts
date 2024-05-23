/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(image: any, args?: any): string {
    // gothrough with user-detail component & home component
    if(!image){
      return 'assets/img/noimage.jpg'
    }
    return image;
  }

}

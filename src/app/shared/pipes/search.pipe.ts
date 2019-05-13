import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAvailable'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, select?: any): any {
    const filterAvailable = items.filter(item => item.available === select);
    switch (select) {
      case false:
        return select ? items : filterAvailable;
      case true:
        return select ? filterAvailable : items;
      case 'mayor':
        items = items.sort((a, b) => b.quantity - a.quantity).filter((a, b, c) => !b || c[b - 1].quantity !== a.quantity);
        return select = items;
      case 'minor':
        items = items.sort((a, b) => a.quantity - b.quantity).filter((a, b, c) => !b || c[b - 1].quantity !== a.quantity);
        return select = items;
      default: return items;
    }
  }
}

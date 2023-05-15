import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if (!searchText) {
      return users.sort((a, b) => a.name.localeCompare(b.name));
    }
    searchText = searchText.toLowerCase();
    return users
      .filter((user) => user.name.toLowerCase().includes(searchText))
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}


import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(items: any[], paginationConfig: any): any[] {
    const currentPage = paginationConfig.currentPage || 1;
    const itemsPerPage = paginationConfig.itemsPerPage || 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }

}

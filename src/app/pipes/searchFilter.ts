

import { Pipe, PipeTransform } from "@angular/core";

// Define a custom pipe to filter data based on a search term
@Pipe(
    {
        name: 'searchFilter',
        //pure: false -- p
    }
)
export class SearchFilterPipe implements PipeTransform {
    transform(items: any[], searchTerm: string): any[] {
        // console.log(items);
        // if (!items) return [];
        // if (!searchTerm) return items;
        searchTerm = searchTerm.toLowerCase();
        return items.filter(item => {
            return item.name.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm);
        });
    }
}

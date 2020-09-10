import { Pipe, PipeTransform } from "@angular/core";
import { Service, Category } from './app';

@Pipe({
    name: 'filterServices'
})
export class FilterServicesByCategoryPipe implements PipeTransform {
    transform(services: Service[], categoryId: number): Service[] {
        if (!services || !categoryId) {
            return services;
        }

        return services.filter(s => s.category === categoryId);
    }
}
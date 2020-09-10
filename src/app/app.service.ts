import { Injectable } from '@angular/core';
import { Category, Service } from './app';

@Injectable()
export class AppService {

    categories: Category[] = [
        {
            id: 1,
            name: "Autos"
        },
        {
            id: 2,
            name: "Salud"
        },
        {
            id: 3,
            name: "Hogar"
        }
    ];

    services: Service[] = [
        {
            id: 1,
            title: "Electricidad",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 3
        },
        {
            id: 2,
            title: "Auxilio Mecánico",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 1
        },
        {
            id: 3,
            title: "Chofer reemplazo",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 1
        },
        {
            id: 4,
            title: "Medico a domicilio",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 2
        },
        {
            id: 5,
            title: "Ambulancia",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 2
        },
        {
            id: 6,
            title: "Gasfitero",
            description: "Lorem ipsum, dolor sit amet cosectetur adpisicing elit.",
            category: 3
        }
    ];

    serviceIdCounter = 7;

    getItems() {
        return this.services;
    }

    getCategories() {
        return this.categories;
    }

    addService(serviceToAdd: Service) {
        this.services[this.services.length] = {
            id: this.serviceIdCounter++,
            ...serviceToAdd
        };
    }

    editService(serviceToEdit: Service) {
        const idx = this.services.findIndex(s => s.id === serviceToEdit.id);
        this.services[idx] = Object.assign({}, serviceToEdit);
    }

    deleteService(serviceId: number) {
        return this.services = this.services.filter(s => s.id !== serviceId);
    }
}

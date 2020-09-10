import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Service, Category } from './app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  services: Service[];
  categories: Category[];

  serviceForm: Service = {
    id: null,
    title: null,
    description: null,
    category: null
  };

  selectedCategoryId: number = null;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.services = this.appService.getItems();
    this.categories = this.appService.getCategories();
  }

  onSelectToEditService(service: Service) {
    this.serviceForm = Object.assign({}, service);
  }

  onSelectCategory(categoryId?: number) {
    this.selectedCategoryId = categoryId || null;
    console.log(this.selectedCategoryId);
  }

  onSaveServiceForm() {
    if (!this.serviceForm.title ||
        !this.serviceForm.description ||
        !this.serviceForm.category) {
      return;
    }
    console.log(this.serviceForm.title, this.serviceForm.description, this.serviceForm.category);
    if (this.serviceForm.id) {
      this.appService.editService(this.serviceForm);
    } else {
      this.appService.addService(this.serviceForm);
    }

    if (this.selectedCategoryId && this.selectedCategoryId !== this.serviceForm.category) {
      this.selectedCategoryId = this.serviceForm.category;
    }

    this.resetServiceForm();
  }

  onDeleteService(serviceId: number) {
    this.services = this.appService.deleteService(serviceId);

    if (serviceId === this.serviceForm.id) {
      this.resetServiceForm();
    }
  }

  onResetServiceForm() {
    this.resetServiceForm();
  }

  private resetServiceForm() {
    this.serviceForm = {
      title: null,
      description: null,
      category: null
    };
  }
}

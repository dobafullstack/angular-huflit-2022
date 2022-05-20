import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { EditLaptopComponent } from './pages/laptop/edit-laptop/edit-laptop.component';
import { LaptopDetailComponent } from './pages/laptop/laptop-detail/laptop-detail.component';
import { LaptopStartComponent } from './pages/laptop/laptop-start/laptop-start.component';
import { LaptopComponent } from './pages/laptop/laptop.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/laptops',
  },
  {
    path: 'laptops',
    component: LaptopComponent,
    children: [
      {
        path: '',
        component: LaptopStartComponent,
      },
      {
        path: ':id',
        component: LaptopDetailComponent,
      },
      {
        path: 'edit/:id',
        component: EditLaptopComponent,
      },
      {
        path: 'new/laptop',
        component: EditLaptopComponent,
      },
    ],
  },
  {
    path: 'customers',
    pathMatch: 'full',
    component: CustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

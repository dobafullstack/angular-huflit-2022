import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { LaptopComponent } from './pages/laptop/laptop.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { LaptopStartComponent } from './pages/laptop/laptop-start/laptop-start.component';
import { LaptopDetailComponent } from './pages/laptop/laptop-detail/laptop-detail.component';
import { EditLaptopComponent } from './pages/laptop/edit-laptop/edit-laptop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaptopComponent,
    CustomerComponent,
    LaptopStartComponent,
    LaptopDetailComponent,
    EditLaptopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

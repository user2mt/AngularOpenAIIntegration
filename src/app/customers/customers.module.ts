import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule, Routes } from '@angular/router';

// routing added here -- this should in different file if we maintain the best practice
const customerRoutes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  // {
  //   path: "customers",
  //   component: CustomersComponent
  // }
];
@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
//- end the routing  

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule {
  constructor() {
    console.log('customer added');
  }
}

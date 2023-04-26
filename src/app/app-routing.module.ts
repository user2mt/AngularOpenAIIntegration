import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustomersComponent } from './customers/customers/customers.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'pipedemo', component: PipeDemoComponent },
    {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },
    {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },


    // { path: 'customers', component: CustomersComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

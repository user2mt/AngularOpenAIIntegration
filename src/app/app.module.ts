import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SearchFilterPipe } from './pipes/searchFilter';
import { AccountModule } from './account/account.module';
import { TestInputDecotorComponent } from './home/child-component/test-input-decotor/test-input-decotor.component';;
import { DashBoardComponent } from './ecommerce-ui/dash-board/dash-board.component'

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        HttpClientModule,
        AccountModule,
        FormsModule,
        ClipboardModule,
        AppRoutingModule,
    ],
    exports: [
        MatIconModule,
        MatTooltipModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        ClipboardModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        PipeDemoComponent,
        SearchFilterPipe,
        TestInputDecotorComponent,
        DashBoardComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {
//     Component,
//     Directive,
//     Renderer,
//     HostListener,
//     HostBinding,
//     ElementRef,
//     NgModule,
//     Input,
//     Output,
//     EventEmitter
// } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// class Joke {
//     public setup: string;
//     public punchline: string;
//     public hide: boolean;

//     constructor(setup: string, punchline: string) {
//         this.setup = setup;
//         this.punchline = punchline;
//         this.hide = true;
//     }

//     toggle() {
//         this.hide = !this.hide;
//     }
// }


// @Directive({
//     selector: "[ccCardHover]"
// })
// class CardHoverDirective {
//     @HostBinding('class.card-outline-primary') private ishovering: boolean;

//     constructor(private el: ElementRef,
//         private renderer: Renderer) {
//         // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
//     }

//     @HostListener('mouseover') onMouseOver() {
//         let part = this.el.nativeElement.querySelector('.card-text');
//         this.renderer.setElementStyle(part, 'display', 'block');
//         this.ishovering = true;
//     }

//     @HostListener('mouseout') onMouseOut() {
//         let part = this.el.nativeElement.querySelector('.card-text');
//         this.renderer.setElementStyle(part, 'display', 'none');
//         this.ishovering = false;
//     }
// }

// @Component({
//     selector: 'joke',
//     template: `
// <div class="card card-block" ccCardHover>
//   <h4 class="card-title">{{data.setup}}</h4>
//   <p class="card-text"
//      [style.display]="'none'">{{data.punchline}}</p>
// </div>
//   `
// })
// class JokeComponent {
//     @Input('joke') data: Joke;
// }

// @Component({
//     selector: 'joke-list',
//     template: `
// <joke *ngFor="let j of jokes" [joke]="j"></joke>
//   `
// })
// class JokeListComponent {
//     jokes: Joke[];

//     constructor() {
//         this.jokes = [
//             new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
//             new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
//             new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
//         ];
//     }
// }


// @Component({
//     selector: 'app',
//     template: `
// <joke-list></joke-list>
//   `
// })
// class AppComponent {
// }

// @NgModule({
//     imports: [BrowserModule],
//     declarations: [
//         AppComponent,
//         JokeComponent,
//         JokeListComponent,
//         CardHoverDirective
//     ],
//     bootstrap: [AppComponent]
// })
// export class AppModule {
// }

// platformBrowserDynamic().bootstrapModule(AppModule);

// ng g component nameComponent --module=app.module.ts
//ng g module main --routing




// <!-- nav -->
// <nav class="navbar navbar-expand navbar-dark bg-dark px-3" *ngIf="user">
//     <div class="navbar-nav">
//         <a class="nav-item nav-link" routerLink="/" routerLinkActive="active">Home</a>
//         <a class="nav-item nav-link" routerLink="/pipedemo" routerLinkActive="active">Pipe</a>
//         <a class="nav-item nav-link" routerLink="/customers" routerLinkActive="active">Customers</a>
//         <a class="nav-item nav-link" routerLink="/account" routerLinkActive="active">Account</a>


//         <button class="btn btn-link nav-item nav-link" (click)="logout()">Logout</button>
//     </div>
// </nav>

// <!-- main app container -->
// <div class="container">
//     <router-outlet></router-outlet>
// </div>

// <!-- credits -->
// <div class="text-center mt-4">
//     <!-- <p>
//         <a href="https://jasonwatmore.com/post/2022/11/15/angular-14-jwt-authentication-example-tutorial" target="_top">Angular 14 - JWT Authentication Example & Tutorial</a>
//     </p>
//     <p>
//         <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>
//     </p> -->
// </div>



// <!--
//        - favicon
//        -->
//     <link rel="shortcut icon" href="assets/images/logo/favicon.ico" type="image/x-icon">
//     <!--
//          - custom css link
//        -->
//     <link rel="stylesheet" href="assets/css/style-prefix.css">
//     <!--
//          - google font link
//        -->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
//         rel="stylesheet">
//     <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
//     <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

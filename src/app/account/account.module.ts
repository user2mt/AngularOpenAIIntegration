import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AccountComponent } from "./account.component";
import { AccountRoutingModule } from "./accout-routing.modules";


@NgModule({
    imports: [BrowserModule, FormsModule, AccountRoutingModule],
    declarations: [AccountComponent]
})
export class AccountModule { }

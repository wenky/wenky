import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { MatSelectModule } from "@angular/material/select";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DropDownComponent } from "./shared/dropdown/dropdown.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [BrowserModule, FormsModule, MatSelectModule,BrowserAnimationsModule],
  declarations: [AppComponent, HelloComponent, DropDownComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

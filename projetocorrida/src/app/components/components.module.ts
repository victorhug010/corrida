import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MyButtonComponent } from "./my-button/my_button.component";
import { MyImageComponent } from "./my-image/my_image.component";
import { MyTextInputsComponent } from "./my-text-inputs/my_text_inputs.component";

@NgModule({
  declarations: [
      MyButtonComponent,
      HomeComponent,
      LoginComponent,
      MyImageComponent,
      MyTextInputsComponent
    
  ],
  exports: [
      MyButtonComponent,
      HomeComponent,
      LoginComponent,
      MyImageComponent,
      MyTextInputsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    
    
  ],
  
})
export class ComponentsModule { }
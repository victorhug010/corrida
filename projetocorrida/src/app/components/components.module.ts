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
import { TwitchCardComponent } from "./my_twitch_card/my_twitch_card.component";
import { TwitchChatComponent } from "./my_twitch_chat/my_twitch_chat.component";
import { TwitchHistoryComponent } from "./my_twitch_history/my_twitch_history.component";
import { TwitchPlayerComponent } from "./my_twitch_player/twitch_player.component";
import { TwitterComponent } from "./twitter_card/twitter_card.component";

@NgModule({
  declarations: [
    MyButtonComponent,
    HomeComponent,
    LoginComponent,
    MyImageComponent,
    MyTextInputsComponent,
    TwitchPlayerComponent,
    TwitchChatComponent,
    TwitchHistoryComponent,
    TwitchCardComponent,
    LoginComponent,
    TwitterComponent

  ],
  exports: [
    MyButtonComponent,
    HomeComponent,
    LoginComponent,
    MyImageComponent,
    MyTextInputsComponent,
    TwitchPlayerComponent,
    TwitchChatComponent,
    TwitchHistoryComponent,
    TwitchCardComponent,
    LoginComponent,
    TwitterComponent
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
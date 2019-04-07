import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {MainPageComponent} from './main-page/main-page.component';
import {DropdownModule, InputTextModule, MultiSelectModule} from 'primeng/primeng';
import {GrammarTaskComponent} from './grammar-task/grammar-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainPageComponent,
    GrammarTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

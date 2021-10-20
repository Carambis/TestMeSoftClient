import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {TaskComponent} from './task/task.component';
import {MainPageComponent} from './main-page/main-page.component';
import {InstructionComponent} from './instruction/instruction.component';
import {TheoryComponent} from './theory/theory.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnswerpartComponent} from './answerpart/answerpart.component';
import {LoginComponent} from './login/login.component';
import { PdfViewerModule   } from 'ng2-pdf-viewer';
import { TaskModule } from './task/task.module';
import { PrimengModule } from './primeng.module';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainPageComponent,
    InstructionComponent,
    TheoryComponent,
    ResultPageComponent,
    AnswerpartComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PdfViewerModule ,
    ReactiveFormsModule,
    TaskModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

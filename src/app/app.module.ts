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
import {GrammarComponent} from './task/grammar/grammar.component';
import {FontComponent} from './task/font/font.component';
import {HintComponent} from './task/hint/hint.component';
import {AlignmentComponent} from './task/alignment/alignment.component';
import {LocationComponent} from './task/location/location.component';
import {CursorComponent} from './task/cursor/cursor.component';
import {CheckboxComponent} from './task/checkbox/checkbox.component';
import {IlluminationComponent} from './task/illumination/illumination.component';
import {LinkComponent} from './task/link/link.component';
import {ButtonFunctionComponent} from './task/button-function/button-function.component';
import {FileTypeCheckComponent} from './task/file-type-check/file-type-check.component';
import {RadiobuttonCheckComponent} from './task/radiobutton-check/radiobutton-check.component';
import {CheckboxCheckComponent} from './task/checkbox-check/checkbox-check.component';
import {UnckeckParamComponent} from './task/unckeck-param/unckeck-param.component';
import {LinkWorkComponent} from './task/link-work/link-work.component';
import {SortProblemComponent} from './task/sort-problem/sort-problem.component';
import {ButtonDoubleClickComponent} from './task/button-double-click/button-double-click.component';
import {FormProblemComponent} from './task/form-problem/form-problem.component';
import {CalendarComponent} from './task/calendar/calendar.component';
import {FilterComponent} from './task/filter/filter.component';
import {InstructionComponent} from './instruction/instruction.component';
import {TheoryComponent} from './theory/theory.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    MainPageComponent,
    GrammarComponent,
    FontComponent,
    HintComponent,
    AlignmentComponent,
    LocationComponent,
    CursorComponent,
    CheckboxComponent,
    IlluminationComponent,
    LinkComponent,
    ButtonFunctionComponent,
    FileTypeCheckComponent,
    RadiobuttonCheckComponent,
    CheckboxCheckComponent,
    UnckeckParamComponent,
    LinkWorkComponent,
    SortProblemComponent,
    ButtonDoubleClickComponent,
    FormProblemComponent,
    CalendarComponent,
    FilterComponent,
    InstructionComponent,
    TheoryComponent
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

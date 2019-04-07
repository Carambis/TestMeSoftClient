import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GrammarComponent} from './task/grammar/grammar.component';
import {AlignmentComponent} from './task/alignment/alignment.component';
import {ButtonDoubleClickComponent} from './task/button-double-click/button-double-click.component';
import {ButtonFunctionComponent} from './task/button-function/button-function.component';
import {CalendarComponent} from './task/calendar/calendar.component';
import {CheckboxComponent} from './task/checkbox/checkbox.component';
import {CheckboxCheckComponent} from './task/checkbox-check/checkbox-check.component';
import {CursorComponent} from './task/cursor/cursor.component';
import {FileTypeCheckComponent} from './task/file-type-check/file-type-check.component';
import {FilterComponent} from './task/filter/filter.component';
import {FontComponent} from './task/font/font.component';
import {FormProblemComponent} from './task/form-problem/form-problem.component';
import {HintComponent} from './task/hint/hint.component';
import {IlluminationComponent} from './task/illumination/illumination.component';
import {LinkComponent} from './task/link/link.component';
import {LinkWorkComponent} from './task/link-work/link-work.component';
import {LocationComponent} from './task/location/location.component';
import {RadiobuttonCheckComponent} from './task/radiobutton-check/radiobutton-check.component';
import {SortProblemComponent} from './task/sort-problem/sort-problem.component';
import {UnckeckParamComponent} from './task/unckeck-param/unckeck-param.component';


const tasks: Routes = [
  { path: 'grammar', component: GrammarComponent},
  { path: 'alignment', component: AlignmentComponent},
  { path: 'button-double-click', component: ButtonDoubleClickComponent},
  { path: 'button-function', component: ButtonFunctionComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'checkbox', component: CheckboxComponent},
  { path: 'checkbox-check', component: CheckboxCheckComponent},
  { path: 'cursor', component: CursorComponent},
  { path: 'file-type-check', component: FileTypeCheckComponent},
  { path: 'filter', component: FilterComponent},
  { path: 'font', component: FontComponent},
  { path: 'form-problem', component: FormProblemComponent},
  { path: 'hint', component: HintComponent},
  { path: 'illumination', component: IlluminationComponent},
  { path: 'link', component: LinkComponent},
  { path: 'link-work', component: LinkWorkComponent},
  { path: 'location', component: LocationComponent},
  { path: 'radiobutton-check', component: RadiobuttonCheckComponent},
  { path: 'sort-problem', component: SortProblemComponent},
  { path: 'unckeck-param', component: UnckeckParamComponent}
];

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent},
  { path: 'task', component: TaskComponent, children: tasks}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

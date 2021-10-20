import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GrammarComponent} from './task/component/grammar/grammar.component';
import {AlignmentComponent} from './task/component/alignment/alignment.component';
import {ButtonDoubleClickComponent} from './task/component/button-double-click/button-double-click.component';
import {ButtonFunctionComponent} from './task/component/button-function/button-function.component';
import {CalendarComponent} from './task/component/calendar/calendar.component';
import {CheckboxComponent} from './task/component/checkbox/checkbox.component';
import {CheckboxCheckComponent} from './task/component/checkbox-check/checkbox-check.component';
import {CursorComponent} from './task/component/cursor/cursor.component';
import {FileTypeCheckComponent} from './task/component/file-type-check/file-type-check.component';
import {FilterComponent} from './task/component/filter/filter.component';
import {FontComponent} from './task/component/font/font.component';
import {FormProblemComponent} from './task/component/form-problem/form-problem.component';
import {HintComponent} from './task/component/hint/hint.component';
import {IlluminationComponent} from './task/component/illumination/illumination.component';
import {LinkComponent} from './task/component/link/link.component';
import {LinkWorkComponent} from './task/component/link-work/link-work.component';
import {LocationComponent} from './task/component/location/location.component';
import {RadiobuttonCheckComponent} from './task/component/radiobutton-check/radiobutton-check.component';
import {SortProblemComponent} from './task/component/sort-problem/sort-problem.component';
import {UnckeckParamComponent} from './task/component/unckeck-param/unckeck-param.component';
import {ResultPageComponent} from './result-page/result-page.component';
import {LoginComponent} from './login/login.component';
import {TheoryComponent} from './theory/theory.component';
import {InstructionComponent} from './instruction/instruction.component';
import {TaskGuard} from './TaskGuard';


const tasks: Routes = [
  {path: 'grammar', component: GrammarComponent},
  {path: 'alignment', component: AlignmentComponent},
  {path: 'button-double-click', component: ButtonDoubleClickComponent},
  {path: 'button-function', component: ButtonFunctionComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'checkbox', component: CheckboxComponent},
  {path: 'checkbox-check', component: CheckboxCheckComponent},
  {path: 'cursor', component: CursorComponent},
  {path: 'file-type-check', component: FileTypeCheckComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'font', component: FontComponent},
  {path: 'form-problem', component: FormProblemComponent},
  {path: 'hint', component: HintComponent},
  {path: 'illumination', component: IlluminationComponent},
  {path: 'link', component: LinkComponent},
  {path: 'link-work', component: LinkWorkComponent},
  {path: 'location', component: LocationComponent},
  {path: 'radiobutton-check', component: RadiobuttonCheckComponent},
  {path: 'sort-problem', component: SortProblemComponent},
  {path: 'uncheck-param', component: UnckeckParamComponent}
];

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'task', component: TaskComponent, children: tasks, canActivate: [TaskGuard]},
  {path: 'finishTest', component: ResultPageComponent, canActivate: [TaskGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'theory', component: TheoryComponent},
  {path: 'instruction', component: InstructionComponent},
  {path: 'result', component: ResultPageComponent, canActivate: [TaskGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TaskGuard]
})

export class AppRoutingModule {
}

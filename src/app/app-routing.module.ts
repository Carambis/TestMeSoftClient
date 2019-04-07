import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskComponent} from './task/task.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GrammarTaskComponent} from './grammar-task/grammar-task.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent},
  { path: 'task', component: TaskComponent},
  { path: 'task/:id', component: GrammarTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

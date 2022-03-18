import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './comp/projects/projects.component';
import { TasksComponent } from './comp/tasks/tasks.component';
const routes: Routes = [{
  path: "tracker", component: TasksComponent
},
{
  path: "projects", component: ProjectsComponent ,
},
{
  path: "**", redirectTo:"projects"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

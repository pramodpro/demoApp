import { Component } from '@angular/core';
import { ProjectsComponent } from './comp/projects/projects.component';
import { TasksComponent } from './comp/tasks/tasks.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoApp';
}

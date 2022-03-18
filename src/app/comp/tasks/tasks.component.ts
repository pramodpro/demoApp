import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  label:string  ="start";
  timer = 0;
  taskList = [
    {
      taskName: "task1",
      totalTime: 0
    },
    {
      taskName: "task2",
      totalTime: 3
    }
  ];
  currentTask = "";
  constructor() { }
  addTask() {
    let val = document.getElementById('taskname');
    console.log(val);
  }
  getTask(e:Event) {
    console.log("get task called");
  }
  toggleTime() {
    var minute = 0;
    if(this.label == "start") {
      var time = setInterval(()=> {
        if(this.timer>60) {
          minute++; 
          this.timer = 0;
        } else {
          this.timer++;
        }
        console.log(this.timer)
      },1000)
    } else if(this.label == "end") {
      
      this.timer = 0;
    }

    this.label = (this.label == "start")?"end":"start";
    
  }

  resumeClock(task:any) {
    let currentTime = task.totalTime;

  }

  ngOnInit(): void {

  }

}

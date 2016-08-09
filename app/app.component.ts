import { Component } from 'angular2/core';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  template: `
  <h2 *ngFor="#currentTask of taskList" (click)="taskClicked(currentTask)">
    {{ currentTask.description }}
  </h2>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  taskClicked(clickedTask: Task): void {
    console.log(clickedTask);
  }
}

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>To Do List</h1>
      <task-list [taskList]="tasks"></task-list>
    </div>
  `
})

export class AppComponent {
  public tasks: Task[];
  constructor(){
    this.tasks = [
      new Task("Create To Do List.", 0),
      new Task("Eat breakfast.", 1),
      new Task("Red Sweater Project.", 2),
      new Task("What's the deal with Brexit?", 3)
    ];
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}

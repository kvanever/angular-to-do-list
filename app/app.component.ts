import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>To Do List</h1>
      <h2 *ngFor="#task of tasks" (click)="taskWasSelected(task)">{{ task.description }}</h2>
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
  taskWasSelected(clickedTask: Task): void {
    console.log(clickedTask);
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}

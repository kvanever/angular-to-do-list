import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  inputs: ['task'],
  template: `
    <h2>{{ task.description }}</h2>
  `
})
export class TaskComponent {
  public task: Task;
}

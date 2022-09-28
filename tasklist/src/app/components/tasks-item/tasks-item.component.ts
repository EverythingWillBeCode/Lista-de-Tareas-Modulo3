import { Component, OnInit, Input } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task: task = TASKS[0];
  


  constructor() { }

  ngOnInit(): void {
  }

}

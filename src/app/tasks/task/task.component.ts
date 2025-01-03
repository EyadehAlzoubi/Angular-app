import { Component,EventEmitter,inject,Input, Output } from '@angular/core';
import { Task } from './task.modle';
// import { CardComponent } from "../../shared/card/card.component";
// import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone:false,
  // imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!:Task;
  @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  onCompletedTask(){
    this.tasksService.removeTask(this.task.id);
  }

}

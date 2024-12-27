import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NewTaskData } from '../task/task.modle';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // @Input({required:true}) name!: string;
  // @Input({required:true}) date!: Date;
  // @Input({required:true}) text!: string;
  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle ="";
  enteredSummary ="";
  enteredDate ="";
  private tasksService = inject(TasksService);


  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
    {
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    },this.userId);

    this.close.emit();
  }

}

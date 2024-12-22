import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NewTaskData } from '../task/task.modle';

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

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  enteredTitle ="";
  enteredSummary ="";
  enteredDate ="";


  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate
    });
  }

}

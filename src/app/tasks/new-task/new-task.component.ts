import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  // @Input({required:true}) name!: string;
  // @Input({required:true}) date!: Date;
  // @Input({required:true}) text!: string;

  @Output() cancel = new EventEmitter<void>();

  onCancel(){
    this.cancel.emit();
  }

}

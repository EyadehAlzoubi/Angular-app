import { Component ,Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask =false;

  tasks = [
    {
      id:'t1',
      userId:'u1',
      title:'Eyadah alzoubi0',
      summary:"eyadah alzoubi hhhhh",
      dueDate:'2001-05-15'
    },
    {
      id:'t2',
      userId:'u3',
      title:'Eyadah alzoubi1',
      summary:"eyadah alzoubi hhhhh",
      dueDate:'2001-05-15'
    },
    {
      id:'t3',
      userId:'u3',
      title:'Eyadah alzoubi2',
      summary:"eyadah alzoubi hhhhh",
      dueDate:'2001-05-15'
    },
    {
      id:'t4',
      userId:'u2',
      title:'Eyadah alzoubi3',
      summary:"eyadah alzoubi hhhhh",
      dueDate:'2001-05-15'
    },
  ];

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string){
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCansleTask(){
    this.isAddingTask =false;
  }

}

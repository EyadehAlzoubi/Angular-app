import { Component ,Input} from '@angular/core';
// import { TaskComponent } from "./task/task.component";
// import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.modle';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone:false,
  // imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({required:true}) name!:string;
  isAddingTask =false;
  private tasksService: TasksService;

  constructor(tasksService:TasksService){
    this.tasksService =tasksService;
  }



  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id:string){
  //   // this.tasksService.removeTask(id);
  // }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseTask(){
    this.isAddingTask =false;
  }

  // onAddTask(taskData:NewTaskData){
  //   this.tasksService.addTask(taskData,this.userId);
  //   this.isAddingTask=false;
  // }
}

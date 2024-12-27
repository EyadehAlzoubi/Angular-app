import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.modle';

@Injectable({providedIn:'root'})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Eyadah alzoubi0',
      summary: 'eyadah alzoubi hhhhh',
      dueDate: '2001-05-15',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Eyadah alzoubi1',
      summary: 'eyadah alzoubi hhhhh',
      dueDate: '2001-05-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Eyadah alzoubi2',
      summary: 'eyadah alzoubi hhhhh',
      dueDate: '2001-05-15',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Eyadah alzoubi3',
      summary: 'eyadah alzoubi hhhhh',
      dueDate: '2001-05-15',
    },
  ];

  getUserTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData:NewTaskData,userId:string){
    this.tasks.push({
        id:new Date().getTime().toString(),
        userId:userId,
        title:taskData.title,
        summary:taskData.summary,
        dueDate:taskData.date,
      })
  }

  removeTask(id:string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}

import { Component ,EventEmitter,Input, Output,output} from '@angular/core';


type User = {
  id:string;
  avatar:string;
  name:string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // avatar =input.required<string>();
  // name =input.required<string>();

  // imagePath = computed(() => {
  //   return 'users/'+this.avatar();

  // });


  get imagePath(){
    return 'users/'+this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);

  }

}

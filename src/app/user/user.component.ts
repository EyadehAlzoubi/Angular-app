import { Component ,EventEmitter,Input, Output,output} from '@angular/core';
import {type User} from './user.modle';
// import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone:false,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return 'users/'+this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);

  }

}

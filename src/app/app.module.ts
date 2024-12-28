import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { RouterOutlet } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [AppComponent,HeaderComponent,UserComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule,RouterOutlet,FormsModule,DatePipe,SharedModule,TasksModule]
})


export class AppModule {}

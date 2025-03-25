import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CounterComponent } from "./components/counter/counter.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CounterComponent, CommonModule, TodoListComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {}

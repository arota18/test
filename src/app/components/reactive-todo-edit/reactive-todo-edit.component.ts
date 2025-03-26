import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../todo-list/todo-list.component";

@Component({
  selector: "app-reactive-todo-edit",
  templateUrl: "./reactive-todo-edit.component.html",
  imports: [CommonModule, FormsModule],
})
export default class ReactiveTodoEditComponent implements OnInit {
  readonly todoService = inject(TodoService);
  private readonly _router = inject(Router);

  item: Todo | undefined = this.todoService.getItem();
  des: string = this.item?.title ?? "";

  ngOnInit() {
    // console.log("item", this.item);
    console.log('id service', this.todoService.id)
  }

  apply(): void {
    console.log("apply", this.des);
    if (this.item) {
      this.item.title = this.des;
      const todos = this.todoService.todos().map(x => {
        if (x.id === this.item?.id) {
          x.title = this.item?.title;
        }
        return x;
      });
      console.log('todos mapped', todos);
      this.todoService.todos$.next(todos);
      this._router.navigateByUrl("reactive-todo-list");
    }
  }
}

import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../todo-list/todo-list.component";

@Component({
  selector: "app-todo-edit",
  templateUrl: "./todo-edit.component.html",
  imports: [CommonModule, FormsModule],
})
export default class TodoEditComponent implements OnInit {
  readonly todoService = inject(TodoService);
  private readonly _router = inject(Router);

  item: Todo | undefined = this.todoService.getItem();
  des: string = this.item?.title ?? "";

  ngOnInit() {
    console.log("item", this.item);
  }

  apply(): void {
    console.log("apply", this.des);
    if (this.item) {
      this.item.title = this.des;
      // this.todoService.setItem({ ...this.item, title: this.des });
      // this.todoService.setItem({ ...this.item, title: this.des });
      this._router.navigateByUrl("todo-list");
    }
  }

}

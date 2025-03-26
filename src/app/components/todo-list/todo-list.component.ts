import { CommonModule } from "@angular/common";
import { Component, computed, inject, OnInit, signal } from "@angular/core";
import { TodoService } from "../../services/todo-service.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-todo-list",
  imports: [CommonModule],
  templateUrl: "./todo-list.component.html",
  styles: ``,
})
export default class TodoListComponent implements OnInit{

  readonly todoService = inject(TodoService);
  private readonly _router = inject(Router);

  // todosCompleted = computed(
  //   () => this.todos().filter((todo) => todo.completed).length,
  // );
  // todosLeft = computed(
  //   () => this.todos().filter((todo) => !todo.completed).length,
  // );

  ngOnInit(): void {
    const element = this.todoService.getItem();
    if(element) {
      console.log('ho eseguito una modifica', element);
      const todos = this.todoService.todos();
      todos.forEach(todo => {
        if(todo.id === element.id) {
          todo.title = element.title
        }
      });
      this.todoService.todos.update((elements) => todos);
    }
  }

  addTodo(input: HTMLInputElement) {
    if (input.value) {
      const newTodo: Todo = {
        id: Date.now(),
        title: input.value,
        completed: false,
      };
      this.todoService.todos.update((currentTodos) => [...currentTodos, newTodo]);
      input.value = "";
    }
  }

  editTodo(todo: Todo): void {
    console.log('todo', todo);
    this.todoService.setItem(todo);
    this._router.navigateByUrl('todo-edit');
  }

  removeTodo(todoToRemove: Todo) {
    this.todoService.todos.update((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoToRemove.id),
    );
  }

  toggleTodo(todoToToggle: Todo) {
    this.todoService.todos.update((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoToToggle.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  }
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

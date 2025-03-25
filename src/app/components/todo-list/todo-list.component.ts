import { CommonModule } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: "app-todo-list",
  imports: [CommonModule],
  templateUrl: "./todo-list.component.html",
  styles: ``,
})
export class TodoListComponent {
  todos = signal<Todo[]>([
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
  ]);
  todosCompleted = computed(
    () => this.todos().filter((todo) => todo.completed).length,
  );
  todosLeft = computed(
    () => this.todos().filter((todo) => !todo.completed).length,
  );

  addTodo(input: HTMLInputElement) {
    if (input.value) {
      const newTodo: Todo = {
        id: Date.now(),
        title: input.value,
        completed: false,
      };
      this.todos.update((currentTodos) => [...currentTodos, newTodo]);
      input.value = "";
    }
  }

  removeTodo(todoToRemove: Todo) {
    this.todos.update((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== todoToRemove.id),
    );
  }

  toggleTodo(todoToToggle: Todo) {
    this.todos.update((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoToToggle.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    );
  }
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

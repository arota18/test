import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { filter, map, mergeMap, Subscription } from "rxjs";
import { TodoService } from "../../services/todo-service.service";
import { Todo } from "../todo-list/todo-list.component";

@Component({
  selector: "app-reactive-todo-list",
  templateUrl: "./reactive-todo-list.component.html",
  imports: [CommonModule],
})
export default class ReactiveTodoListComponent implements OnInit, OnDestroy {
  readonly todoService = inject(TodoService);
  private readonly _router = inject(Router);

  // todos = signal<Todo[]>([]);

  private _sub: Subscription[] = [];

  ngOnInit(): void {
    //viene sostituito dall'utilizzo dell'asyncpipe

    //   console.log("id service", this.todoService.id); 
    //   this._sub.push(
    //     this.todoService.todos$.subscribe((list) => {
    //       // console.log('list todos$', list);
    //       this.todos.set(list);
    //     }),
    //   );

    // this.todoService.arrayNumbers$
    //   .pipe(
    //     map((listNumber) => {
    //       return listNumber.filter((num) => (num % 7 || num % 11) == 0);
    //     }),
    //   )
    //   .subscribe((response) => console.log("arrayNumbers", response));

    // this.todoService.arrayNumbersFrom$
    //   .pipe(filter((num) => (num % 7 || num % 11) == 0))
    //   .subscribe((response) => console.log("arrayNumbersFrom", response));

    // this.todoService.arrayNumbersFrom$
    //   .pipe(
    //     filter((num) => (num % 7 || num % 11) == 0),
    //     mergeMap((responseOf) =>
    //       this.todoService.arrayNumbers$.pipe(
    //         map((listNumber) => {
    //           return listNumber.filter((num) => (num % 7 || num % 11) == 0);
    //         }),
    //       ),
    //     ),
    //   )
    //   .subscribe((responseOf) => console.log("merge responseOf", responseOf));

      //esercizio
      this.todoService.arrayNumbers$
      .pipe(
        map((listNumber) => {
          return listNumber
          .filter((num) => num % 2 !== 0)
          .reduce((mappa, currentNumber, index) => {
            const slotIndex = Math.floor(index/5);
            mappa.set(slotIndex, [...(mappa.get(slotIndex) || []), currentNumber]);
            return mappa;
          }, new Map<number, number[]>())
        }),
      )
      .subscribe((response) => console.log("arrayNumbers dispari", response));
  }

  ngOnDestroy(): void {
    //   this._sub.forEach((x) => x.unsubscribe());  //viene sostituito dall'utilizzo dell'asyncpipe
  }

  addTodo(input: HTMLInputElement) {
    if (input.value) {
      const newTodo: Todo = {
        id: Date.now(),
        title: input.value,
        completed: false,
      };
      this.todoService.todos.update((currentTodos) => [
        ...currentTodos,
        newTodo,
      ]);
      input.value = "";
    }
  }

  editTodo(todo: Todo): void {
    // console.log("todo", todo);
    this.todoService.setItem(todo);
    this._router.navigateByUrl("reactive-todo-edit");
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

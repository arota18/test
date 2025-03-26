import { Injectable, signal } from "@angular/core";
import { Todo } from "../components/todo-list/todo-list.component";
import { BehaviorSubject, from, of, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  id = Math.random();
  
  todos = signal<Todo[]>([
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
    { id: 3, title: "Todo 3", completed: false },
    { id: 4, title: "Todo 4", completed: false },
    { id: 5, title: "Todo 5", completed: false },
    { id: 6, title: "Todo 6", completed: false },
  ]);

  todos$ = new BehaviorSubject<Todo[]>(this.todos());

  todosObs = this.todos$.asObservable(); //transorm hot observable to cold

  private _todoItem: Todo | undefined;

  setItem(item: Todo): void {
    this._todoItem = item;
  }

  getItem(): Todo | undefined {
    return this._todoItem;
  }

  arrayNumber = this.generateArray(1000);
  arrayNumbers$ = of(this.arrayNumber);
  arrayNumbersFrom$ = from(this.arrayNumber);

  private generateArray(size: number): number[] {
    const set = new Set<number>();
    while (set.size < size) {
      set.add(Math.floor(Math.random() * 100000));
    }
    return Array.from(set);
  }
}

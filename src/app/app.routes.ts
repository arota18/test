import { Routes } from "@angular/router";
import { FormComponent } from "./components/form/form.component";
import { authGuard } from "./guard/auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "form", pathMatch: "full" },
  {
    path: "form",
    component: FormComponent,
  },
  {
    path: "todo-list/:nome",
    loadComponent: () => import("./components/todo-list/todo-list.component"),
    canActivate: [authGuard],
  },
  {
    path: "todo-list",
    loadComponent: () => import("./components/todo-list/todo-list.component"),
  },
  {
    path: "todo-edit",
    loadComponent: () => import("./components/todo-edit/todo-edit.component"),
  },
  {
    path: "reactive-todo-list",
    loadComponent: () =>
      import("./components/reactive-todo-list/reactive-todo-list.component"),
  },
  {
    path: "reactive-todo-edit",
    loadComponent: () =>
      import("./components/reactive-todo-edit/reactive-todo-edit.component"),
  },
];

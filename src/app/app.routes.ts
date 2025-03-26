import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "todo-list",
        loadComponent: () => import("./components/todo-list/todo-list.component"),
    },
    {
        path: "todo-edit",
        loadComponent: () => import("./components/todo-edit/todo-edit.component")
    },
    {
        path: "reactive-todo-list",
        loadComponent: () => import("./components/reactive-todo-list/reactive-todo-list.component"),
    },
    {
        path: "reactive-todo-edit",
        loadComponent: () => import("./components/reactive-todo-edit/reactive-todo-edit.component")
    }
];

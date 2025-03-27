import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { TimelineItem } from "./components/timeline/timeline.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    CommonModule,
    // PhoneComponent,
    // TimelineComponent,
    // AlertComponent,
    // CounterComponent
  ],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  private readonly _router = inject(Router);

  imageUrl = "https://img.daisyui.com/images/stock/453966.webp";
  alt = "wallpaper";

  timelineItems: TimelineItem[] = [
    { start: "2010", end: "Mario" },
    { start: "2015", end: "Luigi" },
    { start: "2020", end: "Gigi" },
  ];

  ngOnInit(): void {
    // this._router.navigateByUrl('todo-list');
    // this._router.navigateByUrl("reactive-todo-list");
  }

  onDenyHandler() {
    window.alert("Deny");
  }

  onConfirmHandler() {
    window.alert("Confirm!");
  }
}

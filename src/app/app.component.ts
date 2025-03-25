import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PhoneComponent } from "./components/phone/phone.component";
import {
  TimelineComponent,
  TimelineItem,
} from "./components/timeline/timeline.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, PhoneComponent, TimelineComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  imageUrl = "https://img.daisyui.com/images/stock/453966.webp";
  alt = "wallpaper";

  timelineItems: TimelineItem[] = [
    { start: "2010", end: "Mario" },
    { start: "2015", end: "Luigi" },
    { start: "2020", end: "Gigi" },
  ];
}

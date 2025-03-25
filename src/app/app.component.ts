import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PhoneComponent } from "./components/phone/phone.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, PhoneComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  imageUrl = "https://img.daisyui.com/images/stock/453966.webp";
  alt = "wallpaper";
}

import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
  selector: "app-phone",
  imports: [],
  templateUrl: "./phone.component.html",
  styles: ``,
})
export class PhoneComponent {
  @Input({ required: true }) src: string = "";
  @Input({ transform: (value: string) => value.toUpperCase() }) alt: string =
    "";
  @Input({ transform: booleanAttribute }) mostraAlt: boolean = false;
  @Input({
    transform: (value: "sm" | "md" | "xl") => {
      switch (value) {
        case "sm":
          return 50;
        case "md":
          return 75;
        case "xl":
          return 100;

        default:
          return 100;
      }
    },
  })
  size: number = 100;
}

// Primo esercizio: Aggiungere una input che fa vedere in modo condizionale
// la scritta dell'input ALT al centro dello schermo

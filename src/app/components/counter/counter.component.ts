import { NgClass, NgIf } from "@angular/common";
import { Component, computed, effect, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  imports: [NgIf, NgClass],
  templateUrl: "./counter.component.html",
  styles: ``,
})
export class CounterComponent {
  counter = signal(0);
  isZero = computed(() => this.counter() === 0);
  isZeroColor = computed(() => (this.isZero() ? "" : "text-red-500"));

  constructor() {
    effect(() => {
      console.log("Il valore di counter attuale: ", this.counter());
      localStorage.setItem("counter", JSON.stringify(this.counter()));
    });

    effect(() => {
      console.log("Is Zero: ", this.isZero());
    });
  }

  decrement() {
    this.counter.update((currentValue) => currentValue - 1);
  }

  increment() {
    this.counter.update((currentValue) => currentValue + 1);
  }

  reset() {
    this.counter.set(0);
  }
}

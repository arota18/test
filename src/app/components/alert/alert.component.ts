import { NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IconVariantComponent } from "../icon-variant/icon-variant.component";

@Component({
  selector: "app-alert",
  imports: [NgClass, IconVariantComponent],
  templateUrl: "./alert.component.html",
  styles: ``,
})
export class AlertComponent {
  @Output() onDeny = new EventEmitter();
  @Output() onConfirm = new EventEmitter();
  @Input() denyLabel: string = "No";
  @Input() confirmLabel: string = "Yes";
  @Input() variant: AlertVariant;
}

export type AlertVariant = "info" | "success" | "error" | undefined;

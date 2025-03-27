import { Directive, Input } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";

@Directive({
  selector: "[appNumChar]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumCharDirective,
      multi: true,
    },
  ],
})
export class NumCharDirective implements Validator {
  private _appNumChar!: string;
  @Input("appNumChar")
  set appNumChar(value: string) {
    this._appNumChar = value || "rossi";
  }
  get appNumChar(): string {
    return this._appNumChar;
  }
  // in alternativa è possibile mantenere l'Input e passare da un costruttore per valorizzare appNumChar

  validate(control: AbstractControl<string>): ValidationErrors | null {
    if (control.value === null) return null;
    return control.value.toUpperCase() !== this.appNumChar.toUpperCase()
      ? null
      : { appNumChar: { errore: "Deve essere compreso tra 2 e 6 caratteri" } };
  }
}

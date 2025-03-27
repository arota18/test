import { JsonPipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { debounceTime, distinctUntilChanged, Subscription } from "rxjs";
import { NumCharDirective } from "../../directive/num-char.directive";

@Component({
  selector: "app-form",
  imports: [FormsModule, ReactiveFormsModule, JsonPipe, NumCharDirective],
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit, OnDestroy {
  studente = {
    nome: "",
    cognome: "",
    check: false,
    mail: "",
  };

  reactiveForm: FormGroup = new FormGroup({
    nome: new FormControl("", Validators.minLength(4)),
    cognome: new FormControl("", [Validators.required, bannedWord("Rossi")]),
    // mail: new FormControl("", [Validators.email, Validators.email]),
  });

  sub$!: Subscription;

  ngOnInit(): void {
    this.sub$ = this.reactiveForm.controls["nome"].valueChanges
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((newValue) => {
        console.log("nuovo valore", newValue);
      });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  aggiornaForm(event: any) {
    console.log("evento checkbox", event.srcElement.checked);
    if (event.srcElement.checked) {
      this.reactiveForm.addControl("mail", new FormControl(""));
    } else {
      this.reactiveForm.removeControl("mail");
    }
  }

  reset() {
    this.studente.nome = "";
    this.studente.cognome = "";
    this.studente.check = false;
    this.studente.mail = "";
  }
}

export function bannedWord(word: string): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    return control.value.toUpperCase() !== word.toUpperCase()
      ? null
      : { bannedWord: { errore: "Deve essere compreso tra 2 e 6 caratteri" } };
  };
}

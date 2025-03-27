import { CanActivateFn } from "@angular/router";

export const authGuard: CanActivateFn = (route, state) => {
  const utente: User = {
    id: 1,
    nome: "asd",
    ruoli: ["utente", "admin"],
  };
  return utente.ruoli.includes("admin");
};

interface User {
  id: number;
  nome: string;
  ruoli: string[];
}

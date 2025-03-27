import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const interInterceptor: HttpInterceptorFn = (req, next) => {
  let head = req.headers;
  head = req.headers.append("Token", "asdqwe123asdwqe123bh");
  const req2 = req.clone({ headers: head });
  console.log("chiamata in uscita", req2);
  return next(req2).pipe(
    tap((risposta) => console.log("log dentro l'interceptor", risposta)),
  );
};

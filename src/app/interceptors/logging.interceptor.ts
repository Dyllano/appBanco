import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('loggingInterceptor');
  console.log(req);
  var newreq = req.clone({setHeaders: {'X-Reuest-ID':'123'}});
  console.log(newreq)
  return next(newreq);
};

import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = localStorage.getItem('authToken');

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  console.log(`So'rov ketdi: ${req.url}`);
  return next(clonedRequest);
};

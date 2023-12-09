import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, delay, finalize, takeUntil} from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class PostinceptorService implements HttpInterceptor {
unscripeall$:Subject<void>=new Subject<void>()
  constructor( private loaderservice:LoaderService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderservice.loadinsubject.next(true)  /// api call start here
    return next.handle(req)
    .pipe(
      delay(1500),
      takeUntil(this.unscripeall$),    //takeuntil  is rxjs pipeableoperator
      finalize(()=>{
        this.loaderservice.loadinsubject.next(false)  /// api call result 
      })
    ) 
  }
    unscribeall(){
      this.unscripeall$.next();
      this.unscripeall$.complete()
    }
  }

 


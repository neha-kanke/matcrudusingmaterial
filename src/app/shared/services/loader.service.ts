import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
 loadinsubject :BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
       loadindstate$=this. loadinsubject .asObservable()
  constructor() { }


showloader(){
  this. loadinsubject.next(true)
}
hideloader(){
  this.loadinsubject.next(false)

}
}


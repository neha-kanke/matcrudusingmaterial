import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ipost } from '../model/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  usersurl: string = `${environment.baseurl}/users.json`
  constructor(private _httpservices: HttpClient) { }
private newpost$:Subject<Ipost>=new Subject<Ipost>()
private updatesub$:Subject<Ipost>=new Subject<Ipost>()
  postoberver$:Observable<Ipost>=this.newpost$.asObservable()  /// as work subecrip
  updateober$:Observable<Ipost>=this.updatesub$.asObservable()


  getalluser(): Observable<Array<Ipost>> {
    return this._httpservices.get<Ipost>(this.usersurl)
      .pipe(
        map((res: any) => {
          let postarray: Array<Ipost> = []
          for (const key in res) {
            postarray.push({ ...res[key], id: key })
          };
          return postarray
        })
      )
  }
  createpost(post: Ipost) :Observable<Ipost>{
    console.log(post);
    return this._httpservices.post<Ipost>(this.usersurl, post)
      .pipe(
        catchError(err => {
          alert(`somthing went wrong`);
          return of(err)
        })
      )
  
  }

  sendpostob(npost:Ipost){
    this.newpost$.next(npost)
    console.log(npost);
  
  }
  updatepost(post:Ipost):Observable<Ipost>{
    console.log(post);
    let updaturl=`${environment.baseurl}/users/${post.id}.json`
    console.log(updaturl);
    return this._httpservices.patch<Ipost>(updaturl,post)
  }


  sendupdatedata(updatepost:Ipost){
   return this.updatesub$.next(updatepost)
  
  }
  removepost(id:string):Observable<any>{
   let deleteurl=`${environment.baseurl}/users/${id}.json`
   return this._httpservices.delete(deleteurl)
  }
 
}




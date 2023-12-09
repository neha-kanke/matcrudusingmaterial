import { Component, Inject, OnInit } from '@angular/core';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
 {
  isloading !:boolean

  constructor(private _loadservices:LoaderService){}
  ngOnInit(): void {
 this._loadservices.loadinsubject
 .subscribe(res=>{
  this.isloading=res
 })


  }
  title = 'matcrudusingmaterial';
}





import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipost } from '../../model/post';
import { MatDialog } from '@angular/material/dialog';
import { GetconfirmationComponent } from '../getconfirmation/getconfirmation.component';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input() postarr !:Ipost

@Output() emitdata:EventEmitter<Ipost>=new EventEmitter<Ipost>()
@Output() deleteid:EventEmitter<string>=new EventEmitter<string>()
  constructor( private matdiloref:MatDialog ,private _postservices:PostsService) { }
  ngOnInit(): void {
  }
  oneditbtn(){
    this.emitdata.emit(this.postarr)
    console.log(this.postarr);
  }
  onrmove(){
       let dilogref =this.matdiloref.open(GetconfirmationComponent,{
      width:"400px"
    })
    dilogref.afterClosed()
    .subscribe((getconform:Boolean)=>{
      console.log(getconform);
      if(getconform){
        this._postservices.removepost(this.postarr.id)
      .subscribe(res=>{
         this.deleteid.emit(this.postarr.id)
      })
      }
      else{
        return
      }
      

    })


  }
}

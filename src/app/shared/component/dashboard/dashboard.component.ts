import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../model/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  postarry: Array<Ipost> = []
  constructor(private _postser: PostsService, private matdialog: MatDialog) { }

  ngOnInit(): void {
    this._postser.getalluser()
  .subscribe(res => {
    this.postarry = res
  }) 
    this._postser.postoberver$
    .subscribe((res:Ipost) => {
      this.postarry.push(res)
    })
    this._postser.updateober$
    .subscribe((updatpos:Ipost)=>{
      console.log(updatpos);
      let getindex=this.postarry.findIndex(post=>{
         return post.id === updatpos.id  
      })
      console.log(getindex);
      this.postarry[getindex]=updatpos 
    })
  this._postser.removepost

  }
  onaddpost() {
    const matdialogcong = new MatDialogConfig
    // it here crete object
    matdialogcong.disableClose = true
    matdialogcong.width = "500px"
    // matdialogcong.data="send the data to form component"/// // send the data patch sathi
    const matdialogref = this.matdialog.open(PostFormComponent, matdialogcong)
  }
  oneditpatchdata(editdata: Ipost) {
    console.log(editdata);
    const matdialogcong = new MatDialogConfig
    // it here crete object
    matdialogcong.disableClose = true
    matdialogcong.width = "500px"
    matdialogcong.data = editdata
    //"send the data to form component"/// // send the data patch sathi
    const matdialogref = this.matdialog.open(PostFormComponent, matdialogcong)

  }


  onremovepost(id:string){
let getindex=this.postarry.findIndex(post=> post.id===id)
this.postarry.splice(getindex,1)
  }
}

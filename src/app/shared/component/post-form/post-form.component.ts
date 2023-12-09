import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../../services/posts.service';
import { Ipost } from '../../model/post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postform !: FormGroup
  updatepost !: Ipost
  iseidtmode: boolean = false
  constructor(@Inject(MAT_DIALOG_DATA) private getpost: Ipost,
    private _matdioref: MatDialogRef<PostFormComponent>,
    private _postservice: PostsService) {
    this.cretepostform()
    this.updatepost = getpost
    if (getpost) {
      let td = this.postform.patchValue(getpost)
      console.log(td)
      this.iseidtmode = true
    }

    else { this.iseidtmode = false }
  }
  ngOnInit(): void {

  }
  cretepostform() {
    this.postform = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required]),
      userid: new FormControl(1, [Validators.required])
    })
  }
  onaddpost() {
    if (this.postform.valid) {
      let obj = this.postform.value
      // console.log(obj);
      this._postservice.createpost(obj)
        .subscribe((res: any) => {
          this._postservice.sendpostob({ ...obj, id: res['name'] })
          this.postform.reset()
          this._matdioref.close()
        })
    }
  }

  upadtedata() {
    let updatobj = { ...this.postform.value, id: this.updatepost.id }
    this._postservice.updatepost(updatobj)
      .subscribe((res:Ipost) => {
        console.log(res);
        this._postservice.sendupdatedata(res)
        this.postform.reset()
        this._matdioref.close()
      })

  }
}

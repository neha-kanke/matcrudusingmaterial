import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirmation',
  templateUrl: './getconfirmation.component.html',
  styleUrls: ['./getconfirmation.component.scss']
})
export class GetconfirmationComponent implements OnInit {

  constructor(private _matdilore:MatDialogRef<GetconfirmationComponent>) { }

  ngOnInit(): void {
  }
  onconfirm(){
this._matdilore.close(true)

  }
  oncancal(){
this._matdilore.close(false)
  }
}

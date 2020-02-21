import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailSubmit(formdata){
    alert(`when the book is done we will send your mail ${formdata.email}`)
  }

}

import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/shared/services/posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


// import 'firebase/firestore';
// import 'firebase/storage';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  
  clg(){
    console.log(this.authService.getAuthStatus())
  }
}

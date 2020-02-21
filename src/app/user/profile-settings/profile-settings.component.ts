import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/IUser';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit, OnDestroy {

  user$: Observable<IUser>;
  profileChangeForm: FormGroup;

  constructor(public userService: AuthService,private fb: FormBuilder) {
    this.profileChangeForm = this.fb.group({
      image: ['',[Validators.required]],
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      description: ['',Validators.required]
    })
  }
  
 
  uploadFile($event) {
   
    console.log($event.target.files[0]); // outputs the first file
  }
  submitForm(){
    this.user$.subscribe(user =>{
      const uid = user.uid
      this.userService.updateProfile(this.profileChangeForm.value,uid)
    })
  }
  ngOnInit(): void {
    this.user$ = this.userService.user$
    
  }
  ngOnDestroy(){

  }

}

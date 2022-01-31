import { AppServicesService } from './../app-services.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  'contactForm': FormGroup;
  user: User = new User()

  constructor(private appServices: AppServicesService) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
    phone: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.minLength(8), Validators.required]),
    }) 
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.user.email=this.contactForm.get('email')?.value
      this.user.fullname=this.contactForm.get('fullname')?.value
      this.user.phone=this.contactForm.get('phone')?.value
      this.user.password=this.contactForm.get('password')?.value
      // console.log(this.contactForm.value);
      this.saveUser()
    }
    return this.contactForm.reset()
  }
  saveUser() {
    this.appServices.createUser(this.user).subscribe(data =>{
      console.log(data);
    })
  }

}
// saveuser(){
//   this.userService.createUser(this.user).subscribe( data =>{
//     console.log(data);
//     this.goToUserList();
//   },
//   error => console.log(error));
// }
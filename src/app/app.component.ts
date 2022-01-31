import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // 'contactForm': FormGroup;

  ngOnInit() {
    // this.contactForm = new FormGroup({
    //   fullname: new FormControl(null, Validators.required),
    //   email: new FormControl(null, Validators.email),
    //   phone: new FormControl(null, Validators.required),
    //   password: new FormControl(null, [Validators.minLength(8), Validators.required]),
      
    // });

  }

  // onSubmit() {
  //   if (this.contactForm.valid) {
  //     console.log(this.contactForm.value);
  //   }
  //   return this.contactForm.reset()
  // }
}

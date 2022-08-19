import { Component, VERSION } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  myReactiveForm: FormGroup;
  constructor(){
  }

  ngOnInit(){
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'contact': new FormControl(''),
    })
  }

  Submit(){
    console.log(this.myReactiveForm.value)
  }

}

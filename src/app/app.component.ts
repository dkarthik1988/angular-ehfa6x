import { Component } from "@angular/core";
import { FormControl, FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  constructor(private fb: FormBuilder){

  }

  // addContactForm = new FormGroup({
  //   contactDescription : new FormControl(''),
  //   firstName: new FormControl(''),
  //   middleName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   isActive : new FormControl('')


  // });

  addContactForm = this.fb.group({
    contactDescription: [''],
    firstName: [''],
    lastName: [''],
    isActive : [''],
    contactEmails: this.fb.array([
      this.addEmailFormGroup()
    ])
  });

  name = new FormControl("");

  onSubmit(){
   alert(this.addContactForm.value);
  }

  addEmailFormGroup(): FormGroup{
    return this.fb.group({
       emailId: [''],
      emailDescription: [''],
      email:[''],
      isActive: [''],
      isDefault: ['']
    });
  }

  addContactEmail(){
    debugger
    (<FormArray>this.addContactForm.get('contactEmails')).push(this.addEmailFormGroup());

    console.log(this.addContactForm);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Age-App';

  Age: any;
  birthDate = false;
  values: any;
  // birthDate=true;
  
  onKey(e:any) {
    return this.values = e.target.value;
  }
  
  calculateAge() {
    this.birthDate = !this.birthDate;
    return this.Age = 2021 - this.values;
  }


  
}

//////////////////////////////////

// function calculate_age(dob: any) {
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// alert(calculate_age(new Date(1997, 9, 28)));



// birthDate = ''
// sendbirthDate() {
// const birthDate = document.getElementById('txtdate')as HTMLInputElement
// const value = birthDate.value

// //  this.birthDate = 2021- this.value
// sendbirthDate(value:any){
// this.birthDate= 2021 - this.value;
// }
// }

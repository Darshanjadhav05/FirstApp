import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-datadinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-datadinding.component.html',
  styleUrl: './two-way-datadinding.component.css'
})
export class TwoWayDatadindingComponent {
  uname:string = "Darshan"
  Logname:string = "admin"
  pid:string = "123"
  Login(){
    if(this.Logname == "darshan"){
      alert("Success")
      alert(`Name- ${this.Logname} password-${this.pid}`)
    }else{
      alert("Not success")
    }
  }
}

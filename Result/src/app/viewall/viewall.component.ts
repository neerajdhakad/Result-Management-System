import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ResultService } from '../result.service';
import { Router, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {
  
  deleteMessage: boolean = false;
  logOut: boolean = false;
  rollNumberId : number = 0;

  assignItemId(rollno: number) {
    this.rollNumberId = rollno;
  }
  deleteToast() {
    this.deleteMessage = !this.deleteMessage
  }
  logoutToast(){
    this.logOut = !this.logOut
  }

  constructor(private result: ResultService,private router:Router) { }

  r: any
  collection: any = [];
  ngOnInit(): void {
    if(localStorage.getItem("logged")=="false"){
      this.router.navigate(['/teacherlogin']);
    }
    this.result.getList().subscribe((result) => {
      console.warn(result)
      this.r = result
      this.collection = this.r["data"]
    })
  }

  delete(rollno: any) {
    this.result.delete(rollno).subscribe((result)  =>{
      this.deleteMessage = !this.deleteMessage,
      window.location.reload()
      console.log("Deleted")
    })
  }


  logout()
  {
    localStorage.setItem("logged","false")
    this.router.navigate(['/']);
  }
}



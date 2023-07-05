import { RepositryService } from 'src/app/model/repositry.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user: User = new User()

  constructor(private repo: RepositryService, private router: Router) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user')
    console.log(user, "this we getting from local storage")
    if (user != null) {
      console.log(JSON.parse(user), "this is we are grttig")
      this.user = JSON.parse(user)
    }
  }
  logutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.repo.isLogin = false
    this.repo.currentUser = new User()
    this.repo.currentUserRole = ""
    this.router.navigateByUrl('/home')

  }

}

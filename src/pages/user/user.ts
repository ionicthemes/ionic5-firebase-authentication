import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { FirebaseUserModel } from '../core/user.model';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})

export class UserPage{

  user: FirebaseUserModel = new FirebaseUserModel();

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public authService: AuthService
  ) {}

  ionViewWillLoad(){
    this.userService.getCurrentUser()
    .then(user => {
      this.user = user;
    }, err => console.log(err))
  }


  logout(){
    this.authService.doLogout()
    .then((res) => {
      this.navCtrl.pop();
    }, (error) => {
      console.log("Logout error", error);
    });
  }
}

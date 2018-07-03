import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import * as firebase from 'firebase/app';
import { FirebaseUserModel } from './user.model';

@Injectable()
export class UserService {

  constructor(){}


  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user){
        let userModel = new FirebaseUserModel();
        if (user) {
          if(user.providerData[0].providerId == 'password'){
            //use a default image
            userModel.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
            userModel.name = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
          else{
            userModel.image = user.photoURL;
            userModel.name = user.displayName;
            userModel.provider = user.providerData[0].providerId;
            return resolve(userModel);
          }
        } else {
          reject('No user logged in');
        }
      })
    })
  }
}

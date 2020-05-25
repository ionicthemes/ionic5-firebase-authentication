import { Injectable } from "@angular/core";
import { Platform } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { FirebaseUserModel } from './user.model';
import { environment } from '../../environment/environment';


@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    public fb: Facebook,
    public googlePlus: GooglePlus,
    public tw : TwitterConnect,
    public platform: Platform
  ){}

  doRegister(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
  }

  doLogin(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(res => {
       resolve(res);
     }, err => reject(err))
   })
  }

  doLogout(){
   return new Promise((resolve, reject) => {
     if(firebase.auth().currentUser){
       this.afAuth.auth.signOut()
       resolve();
     }
     else {
       reject();
     }
   });
  }

  doGoogleLogin(){
     return new Promise<FirebaseUserModel>((resolve, reject) => {
       if (this.platform.is('cordova')) {
         this.googlePlus.login({
           'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
           'webClientId': environment.googleWebClientId, // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
           'offline': true
         }).then((response) => {
           const googleCredential = firebase.auth.GoogleAuthProvider.credential(response.idToken);
           firebase.auth().signInWithCredential(googleCredential)
           .then((user) => {
             resolve();
           });
         },(err) => {
           reject(err);
         });
       }
       else{
         this.afAuth.auth
         .signInWithPopup(new firebase.auth.GoogleAuthProvider())
         .then((user) => {
            resolve()
         },(err) => {
          reject(err);
        })
       }
     })
   }

  doFacebookLogin(){
    return new Promise<FirebaseUserModel>((resolve, reject) => {
      if (this.platform.is('cordova')) {
        //["public_profile"] is the array of permissions, you can add more if you need
        this.fb.login(["public_profile"])
        .then((response) => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);
          firebase.auth().signInWithCredential(facebookCredential)
            .then(user => resolve());
        }, err => reject(err)
        );
      }
      else {
        this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(result => {
          //Default facebook img is too small and we need a bigger image
          var bigImgUrl = "https://graph.facebook.com/" + result.additionalUserInfo.profile + "/picture?height=500";
          // update profile to save the big fb profile img.
          firebase.auth().currentUser.updateProfile({
            displayName: result.user.displayName,
            photoURL: bigImgUrl
          }).then(res => resolve()
          ,(err) => {
            reject(err);
          });
        },(err) => {
          reject(err);
        })
      }
    })
  }

  doTwitterLogin(){
    return new Promise<FirebaseUserModel>((resolve, reject) => {
      // if we are in a mobile device we use the twitter native plugin

      if (this.platform.is('cordova')) {
        this.tw.login()
          .then((response) => {
            const twitterCredential = firebase.auth.TwitterAuthProvider.credential(response.token, response.secret);
            firebase.auth().signInWithCredential(twitterCredential)
            .then(
              user => resolve(),
              error => reject(error)
            );
          },
          err => {
            console.log(err);
            reject(err);
          }
        );
      }
      else {
        this.afAuth.auth
        .signInWithPopup(new firebase.auth.TwitterAuthProvider())
        .then(result => {
          //Default twitter img is just 48x48px and we need a bigger image https://developer.twitter.com/en/docs/accounts-and-users/user-profile-images-and-banners
          var bigImgUrl = (result.user.photoURL).replace('_normal', '_400x400');

          // update profile to save the big tw profile img.
          firebase.auth().currentUser.updateProfile({
            displayName: result.user.displayName,
            photoURL: bigImgUrl
          }).then(res => resolve(),(err) => {
            reject(err);
          });
        },(err) => {
          reject(err);
        })
      }
    })
  }
}

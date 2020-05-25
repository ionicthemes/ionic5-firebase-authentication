import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject, from } from 'rxjs';
import { Platform } from '@ionic/angular';
import { User, auth } from 'firebase/app';
import { ProfileModel } from './profile/profile.model';

@Injectable()
export class FirebaseAuthService {

  currentUser: User;
  userProviderAdditionalInfo: any;
  redirectResult: Subject<any> = new Subject<any>();

  constructor(
    public angularFire: AngularFireAuth,
    public platform: Platform
  ) {
    this.angularFire.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.currentUser = user;
      } else {
        // No user is signed in.
        this.currentUser = null;
      }
    });

    // when using signInWithRedirect, this listens for the redirect results
    this.angularFire.getRedirectResult()
    .then((result) => {
      // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
      if (result.user) {
        this.setProviderAdditionalInfo(result.additionalUserInfo.profile);
        this.currentUser = result.user;
        this.redirectResult.next(result);
      }
    }, (error) => {
      this.redirectResult.next({error: error.code});
    });
  }

  getRedirectResult(): Observable<any> {
    return this.redirectResult.asObservable();
  }

  setProviderAdditionalInfo(additionalInfo: any) {
    this.userProviderAdditionalInfo = {...additionalInfo};
  }

  public getProfileData() {
    const userModel = new ProfileModel();
    let providerData : any = this.currentUser.providerData[0];

    if (this.userProviderAdditionalInfo) {
      providerData = {...providerData, ...this.userProviderAdditionalInfo};
    }

    // Default imgs are too small and our app needs a bigger image
    switch (providerData.providerId) {
      case 'facebook.com':
        userModel.image = providerData.photoURL + '?height=400';
        break;
      case 'password':
        userModel.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
        break;
      case 'twitter.com':
        userModel.image = providerData.photoURL.replace('_normal', '_400x400');
        break;
      case 'google.com':
        userModel.image = providerData.photoURL.split('=')[0];
        break;
      default:
        userModel.image = providerData.photoURL;
    }
    userModel.name = providerData.name || providerData.displayName || 'What\'s your name?';
    userModel.role = 'How would you describe yourself?';
    userModel.description = providerData.description || 'Anything else you would like to share with the world?';
    userModel.phoneNumber = providerData.phoneNumber || 'Is there a number where I can reach you?';
    userModel.email = providerData.email || 'Where can I send you emails?';
    userModel.provider = (providerData.providerId !== 'password') ? providerData.providerId : 'Credentials';

    return userModel;
  }

  // Get the currently signed-in user
  getLoggedInUser() {
    return this.currentUser;
  }

  signOut(): Observable<any> {
    return from(this.angularFire.signOut());
  }

  signInWithEmail(email: string, password: string): Promise<auth.UserCredential> {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }

  signUpWithEmail(email: string, password: string): Promise<auth.UserCredential> {
    return this.angularFire.createUserWithEmailAndPassword(email, password);
  }

  socialSignIn(providerName: string, scopes?: Array<string>): Promise<any> {
    const provider = new auth.OAuthProvider(providerName);

    // add any permission scope you need
    if (scopes) {
      scopes.forEach(scope => {
        provider.addScope(scope);
      });
    }

    if (this.platform.is('desktop')) {
      return this.angularFire.signInWithPopup(provider);
    } else {
      // web but not desktop, for example mobile PWA
      return this.angularFire.signInWithRedirect(provider);
    }
  }

  signInWithFacebook() {
    const provider = new auth.FacebookAuthProvider();
    // const scopes = ['user_birthday'];
    return this.socialSignIn(provider.providerId);
  }

  signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    const scopes = ['profile', 'email'];
    return this.socialSignIn(provider.providerId, scopes);
  }

  signInWithTwitter() {
    const provider = new auth.TwitterAuthProvider();
    return this.socialSignIn(provider.providerId);
  }
}

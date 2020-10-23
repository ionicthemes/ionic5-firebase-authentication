import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FirebaseAuthService } from '../firebase-auth.service';

@Injectable()
export class ProfilePageResolver implements Resolve<any> {

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  resolve() {
    return this.firebaseAuthService.getProfileDataSource();
  }
}

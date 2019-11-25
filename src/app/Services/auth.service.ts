import { Injectable } from '@angular/core';
import { IAuth } from '../Models';

@Injectable()
export class AuthService {
    currentUser: IAuth;

    loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Okan',
            lastName: 'Toper',
        }
    }
    isAuthenticated(){
        return !!this.currentUser;
    }
    updateCurrentUser(firstName:string,lastName:string){
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
}
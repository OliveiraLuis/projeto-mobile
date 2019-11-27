import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  registroUsuario(value){
    return new Promise<any>((resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(
        res=>resolve(res),
        err=>reject(err)
      )
    })
  }
  
  loginUsuario(value){
    return new Promise<any>((resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res=>resolve(res),
        err=>reject(err)
      )
    })
  }

  logoutUsuario(){
    return new Promise((resolve, reject)=>{
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(()=>{
          console.log("Log OUT");
          resolve();
        }).catch((error)=>{
          reject();
        });
      }
    })
  }

  async detalhesUsuario(){
    return await firebase.auth().currentUser;
  }
}

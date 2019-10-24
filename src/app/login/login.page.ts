import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
    });
  }

  validation_message = {
    'email':[
      {type: 'required', message: 'Email é um campo obrigatório.'},
      {type: 'pattern', message: 'Porfavor insira um e-mail válido.'}
    ],
    'password': [
      {type: 'required', message: 'Senha é um campo obrigatório.'},
      {type: 'minlength', message: 'A senha deve ter no mínimo 8 caracteres.'}
    ] 
  };

  loginUsuario(value){
    this.authService.loginUsuario(value)
    .then(res=>{
      console.log(res);
      this.errorMessage="";
      this.navCtrl.navigateForward('/home');
    }, err=>{
      this.errorMessage = err.message;
    })
  }

  goToRegistroPage(){
    this.navCtrl.navigateForward('/register');
  }

}

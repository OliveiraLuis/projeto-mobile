import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
/*import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';*/

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  imagem: any=null;
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email é um campo obrigatório' },
      { type: 'pattern', message: 'Insira um Email válido' }
    ],
    'password': [
      { type: 'required', message: 'Senha é um campo obrigatório' },
      { type: 'minlength', message: 'Senha deve ter no mínimo 8 caracteres' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authServise: AuthenticationService,
    private formBuilder: FormBuilder,
    //private camera: Camera,
    //private sn: DomSanitizer
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      nome: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required
      ])),
      celular: new FormControl('', Validators.compose([
        Validators.minLength(9),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    this.authServise.registroUsuario(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Sua conta foi criada com sucesso, porfavor efetue login";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  goLoginPage() {
    this.navCtrl.navigateForward('/login')
  }
}

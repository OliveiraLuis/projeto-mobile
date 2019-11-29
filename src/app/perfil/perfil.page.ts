import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service'
import { Storage } from '@ionic/storage'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  imagem: any = null;
  username: any;
  useremail:any;

  private options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  isLogged: boolean;

  constructor(
    private camera: Camera,
    private AuthService: AuthenticationService,
    private storage: Storage,
    private navCtrl: NavController
  ) {}
  
  ngOnInit() {
    this.AuthService.detalhesUsuario().then(usuario => {
      this.useremail = usuario.email
      this.username = usuario.email
    })
    this.pegarFoto()
  }

  baterFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
      this.storage.set('photos', this.imagem);
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

  pegarFoto(){
    this.storage.get('photos').then((photo)=>{
      this.imagem = photo;
    })
  }

  gotoLogoff() {
    this.AuthService.logoutUsuario()
    this.navCtrl.navigateForward('/home')
    this.isLogged = false
  }

}

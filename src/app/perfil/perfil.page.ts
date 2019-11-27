import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AuthenticationService } from '../services/authentication.service'

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

  constructor(
    private camera: Camera,
    private AuthService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.AuthService.detalhesUsuario().then(usuario => {
      console.log(usuario)
    })
  }

  baterFoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.imagem = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('Ops!\nHouve um erro');
      console.log(err)
    });
  }

}

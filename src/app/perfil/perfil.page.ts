import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  imagem: any = null;
  

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  baterFoto(){

    this.imagem = '';
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 100,
      targetHeight: 100
    }

    this.camera.getPicture(options).then((ImageData)=>{
      this.imagem = 'data:image/jpeg;base64,' + ImageData;
    }, (err)=>{
      alert('Erro');
      console.log(err)
    });

  }
}

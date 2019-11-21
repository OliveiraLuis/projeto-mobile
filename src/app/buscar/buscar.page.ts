import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  stringAPI: "https://music-streaming-thing.herokuapp.com/stream/";
  musicasEncontradas: any;
  musicaTocando: any;
  search: any;
  

  constructor(private http: HttpClient,
    private navCtrl: NavController) { }

  ngOnInit() {

    this.musicasEncontradas = []
  }

  buscar() {
    this.http.get(`https://cors-anywhere.herokuapp.com/https://music-streaming-thing.herokuapp.com/audio?query=${encodeURI(this.search)}`)
      .subscribe( data => {
        this.musicasEncontradas = data
      })
  }
  
  tocar(musica) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        musica: JSON.stringify(musica),
      }
    };
    this.navCtrl.navigateForward(['player'], navigationExtras);
  }
}
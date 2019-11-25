import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { PlayerService } from '../player/player.service';

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

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {

    this.musicasEncontradas = []
  }

  ionViewWillEnter() {
    this.musicasEncontradas = this.playerService.musicas
  }

  buscar() {
    this.http.get(`https://cors-anywhere.herokuapp.com/https://music-streaming-thing.herokuapp.com/audio?query=${encodeURI(this.search)}`)
      .subscribe( data => {
        this.musicasEncontradas = data
        this.playerService.musicas = this.musicasEncontradas
      })
  }
  
  tocar(posMusica) {
    this.playerService.posTocando = posMusica
    this.navCtrl.navigateForward(['player'])
  }
}
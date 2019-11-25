import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player/player.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  playlist: any;
  constructor(
      private playerService: PlayerService,
      private navCtrl: NavController
    ) { }

  ngOnInit() {

    this.playlist = [
      {
        name: "Favoritas",
        thumbnail: "../assets/icon/favicon.png",
        description: "Músicas ruins que só você gosta :)"
      }
    ]
  }

  tocarFavoritas() {
      this.playerService.musicas = this.playerService.favoritas
      this.navCtrl.navigateForward(['buscar'])
  }
}

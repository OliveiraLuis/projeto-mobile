import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {

  playlist: any;
  constructor() { }

  ngOnInit() {

    this.playlist = [
      {
        name: "Playlist1",
        author: "Nome do usuário",
        thumbnail: "../assets/icon/favicon.png",
        description: "Músicas que me fazer relaxar."
      },
      {
        name: "Playlist2",
        author: "Nome do usuário",
        thumbnail: "../assets/icon/favicon.png",
        description: "Músicas que me fazer ficar alegre."
      },
      {
        name: "Playlist3",
        author: "Nome do usuário",
        thumbnail: "../assets/icon/favicon.png",
        description: "Músicas que me fazer dormir."
      },
    ]

  }

}

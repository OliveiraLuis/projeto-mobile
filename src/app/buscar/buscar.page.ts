import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  musicasEncontradas: any;
  constructor() { }

  ngOnInit() {

    this.musicasEncontradas = [
      {
        name: "Musicona",
        author: "Dupla que canta muito",
        thumbnail: "../assets/icon/favicon.png",
        description: "Uma música muito boa. Fala sobre coisas que ninguém quer ouvir"
      }
    ]
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.musicasEncontradas = []
    this.musicaTocando = {}
  }

  buscar() {
    this.http.get(`https://cors-anywhere.herokuapp.com/https://music-streaming-thing.herokuapp.com/audio?query=${encodeURI(this.search)}`)
      .subscribe( data => {
        this.musicasEncontradas = data
      })
  }
  
  tocar(musica) {
    this.musicaTocando = musica
    console.log(this.musicaTocando)
  }
}
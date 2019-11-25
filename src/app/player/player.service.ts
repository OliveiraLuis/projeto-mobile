import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  _musicas: Array<Object>
  _posTocando: number
  _qtdMusicas: number
  _favoritas: any[]

  constructor () {
    this._musicas = []
    this._posTocando = 0
    this._qtdMusicas = -1
    this._favoritas = []
  }

  set musicas(musicas) {
    this._musicas = musicas
    this._qtdMusicas = this._musicas.length
  }

  get musicas() {
    return this._musicas
  }

  set posTocando(pos) {
    this._posTocando = pos
  }

  get posTocando() {
    return this._posTocando
  }

  get qtdMusicas() {
    return this._qtdMusicas
  }

  get favoritas() {
    return this._favoritas
  }

  set favoritas(musica: any) {
    this._favoritas.push(musica)
  }
}
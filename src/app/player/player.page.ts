import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  musica: any;
  activeSong: any;
  clickLocation: any;
  playOrPause: any;
  percentageOfVolumeSlider: any;
  volumeStatus: any;
  volume: number;
  volumeMeter: any;
  songTime: string;
  percentageOfSlider: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.playOrPause = "pause"
    this.songTime = "0:00 / 0:00"
    this.percentageOfSlider = 0
    this.activeSong = document.getElementById("song")
    this.volumeStatus = document.getElementById('volumeStatus')
    this.volumeMeter = document.getElementById('volumeMeter')

    this.route.queryParams.subscribe(params => {
      this.musica = JSON.parse(params["musica"])
    })
  }

  play() {
    this.playOrPause = "pause"
    this.activeSong.play()
    // this.volumeStatus.style.width = Math.round(this.percentageOfVolumeSlider) + "px";
  }

  pause() {
    this.playOrPause = "play"
    this.activeSong.pause();
  }

  playPause() {
    if (this.activeSong.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  updateTime() {
    var currentSeconds = (Math.floor(this.activeSong.currentTime % 60) < 10 ? '0' : '') + Math.floor(this.activeSong.currentTime % 60);
    var currentMinutes = Math.floor(this.activeSong.currentTime / 60);

    this.songTime = currentMinutes + ":" + currentSeconds + ' / ' + Math.floor(this.activeSong.duration / 60) + ":" + (Math.floor(this.activeSong.duration % 60) < 10 ? '0' : '') + Math.floor(this.activeSong.duration % 60);

    this.percentageOfSlider *= (this.activeSong.currentTime / this.activeSong.duration)
  }

  changeVolume(number: number, direction: String) {
    if (this.activeSong.volume >= 0 && direction == "down") {
      this.activeSong.volume -= (number / 100)
    }

    if (this.activeSong.volume <= 1 && direction == "up") {
      this.activeSong.volume += (number / 100)
    }

    var percentageOfVolume = this.activeSong.volume / 1;
    var percentageOfVolumeSlider = this.volumeMeter.offsetWidth * percentageOfVolume;
    this.volume = Math.round(percentageOfVolumeSlider)
    this.volumeStatus.style.width = this.volume + "px"
  }

  setLocation(percentage) {
    this.activeSong.currentTime = Math.round(this.activeSong.duration * percentage)
  }

  setVolume(percentage) {
    this.activeSong.volume = percentage;

    var percentageOfVolume = this.activeSong.volume / 1;
    var percentageOfVolumeSlider = this.volumeMeter.offsetWidth * percentageOfVolume;
    this.volume = Math.round(percentageOfVolumeSlider)
    this.volumeStatus.style.width = this.volume + "px"
  }

  setNewVolume(obj, e) {
    var volumeSliderWidth = obj.offsetWidth;
    var evtobj = window.event ? event : e;
    this.clickLocation = evtobj.layerX - obj.offsetLeft;

    var percentage = (this.clickLocation / volumeSliderWidth);
    this.setVolume(percentage);
  }

  stopSong() {
    this.activeSong.currentTime = 0;
    this.activeSong.pause();
  }
}
